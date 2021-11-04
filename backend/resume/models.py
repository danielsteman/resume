from django.db import models
from django.contrib.postgres.fields import ArrayField

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField

class Home(Page):
    WebsiteTitle = models.CharField(max_length=250)
    NavBar = ArrayField(
        models.CharField(max_length=25),
        size=4
    )

    content_panels = Page.content_panels + [
        FieldPanel('WebsiteTitle'),
        FieldPanel('NavBar')
    ]

    api_fields = [
        APIField('WebsiteTitle'),
        APIField('NavBar')
    ]
