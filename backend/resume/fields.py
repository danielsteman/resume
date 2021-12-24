import math
from django.db import models
from datetime import datetime, timedelta


class SkillYearsExperienceField(models.Field):

    """
    description: A custom field that transforms a historical date in the number of years
        between the historical date and date on which the field is rendered.
        To dynamically show the years of experience in a certain skill.
    """

    description = "A field that keeps track of years of experience in a skill"
    start_date = models.DateField()

    def days_to_years(self, date: timedelta):
        return math.ceil(date.days / 365)

    def save(self, *args, **kwargs):
        delta = datetime.today() - self.start_date
        self.start_date = self.days_to_years(delta)
        super(SkillYearsExperienceField, self).save(*args, **kwargs)
