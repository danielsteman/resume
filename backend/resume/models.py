from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models.fields import CharField

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField


class ComponentBase(Page):
    custom_title = models.CharField(
        max_length=100,
        blank=False,
        null=False,
        help_text="Overwrites the default title",
    )

    content_panels = Page.content_panels + [FieldPanel("custom_title")]

    api_fields = [APIField("custom_title")]


class Home(ComponentBase):
    navigation = ArrayField(
        models.CharField(
            max_length=25,
            blank=False,
            null=False,
            help_text="Text on navigation buttons",
        ),
        size=4,
    )

    content_panels = ComponentBase.content_panels + [FieldPanel("navigation")]

    api_fields = ComponentBase.api_fields + [APIField("navigation")]


def default_skill_ratings(default_rating, size):
    return [default_rating] * size


class About(ComponentBase):
    body = models.CharField(max_length=750)
    skills = ArrayField(
        models.CharField(
            max_length=25, blank=False, null=False, help_text="List of general skills"
        ),
        size=6,
    )
    skill_ratings = ArrayField(
        models.IntegerField(default=1), size=6, default=default_skill_ratings(3, 6)
    )
    n_skills_columns = models.IntegerField(default=1)

    content_panels = ComponentBase.content_panels + [
        FieldPanel("body"),
        FieldPanel("skills"),
        FieldPanel("skill_ratings"),
        FieldPanel("n_skills_columns"),
    ]

    api_fields = ComponentBase.api_fields + [
        APIField("body"),
        APIField("skills"),
        APIField("skill_ratings"),
        APIField("n_skills_columns"),
    ]


class Projects(ComponentBase):
    body = models.CharField(
        max_length=750, blank=False, null=False, help_text="Description of project"
    )
    skills = ArrayField(
        models.CharField(max_length=25),
        size=4,
        help_text="List of skills to complete this project",
    )
    n_skills_columns = models.IntegerField(default=1)

    content_panels = ComponentBase.content_panels + [
        FieldPanel("body"),
        FieldPanel("skills"),
        FieldPanel("n_skills_columns"),
    ]

    api_fields = ComponentBase.api_fields + [
        APIField("body"),
        APIField("skills"),
        APIField("n_skills_columns"),
    ]


class Experience(ComponentBase):
    employers = ArrayField(
        models.CharField(
            max_length=25,
            blank=False,
            null=False,
            help_text="List of employers or degrees",
        ),
        size=5,
    )

    employment_title = ArrayField(
        CharField(
            max_length=100,
            blank=False,
            null=False,
            help_text="Position and employer name separated by @",
        ),
        size=5,
    )

    employment_duration = ArrayField(
        CharField(
            max_length=100,
            blank=False,
            null=False,
            help_text="MONTH-YYYY - MONTH-YYYY or MONTH-YYYY\
                - present (LinkedIn-like notation)",
        ),
        size=5,
    )

    employment_description = ArrayField(
        CharField(
            max_length=750,
            blank=False,
            null=False,
            help_text="Description about the work that I've done",
        ),
        size=5,
    )

    content_panels = ComponentBase.content_panels + [
        FieldPanel("employers"),
        FieldPanel("employment_title"),
        FieldPanel("employment_duration"),
        FieldPanel("employment_description"),
    ]

    api_fields = ComponentBase.api_fields + [
        APIField("employers"),
        APIField("employment_title"),
        APIField("employment_duration"),
        APIField("employment_description"),
    ]


class Socials(Page):
    social_links = ArrayField(CharField(max_length=250, blank=False, null=False))

    content_panels = Page.content_panels + [FieldPanel("social_links")]

    api_fields = [APIField("social_links")]


class Footer(Page):
    footer_text = CharField(
        max_length=100, blank=False, null=False, help_text="Footer text"
    )

    content_panels = Page.content_panels + [FieldPanel("footer_text")]

    api_fields = [APIField("footer_text")]
