import math
from django.db import models
from datetime import datetime, timedelta


class SkillYearsExperienceField(models.Field):
    description = "A field that keeps track of years of experience in a skill"
    start_date = models.DateField()

    def days_to_years(self, date: timedelta):
        return math.ceil(date.days / 365)

    def save(self, *args, **kwargs):
        delta = datetime.today() - self.start_date
        self.start_date = self.days_to_years(delta)
        super(SkillYearsExperienceField, self).save(*args, **kwargs)
