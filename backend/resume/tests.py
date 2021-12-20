from datetime import datetime
from django.test import TestCase
from .fields import SkillYearsExperienceField


class SkillYearsExperienceTest(TestCase):
    def test_string_date(self):
        self.assertIsInstance(
            SkillYearsExperienceField.get_years_experience(
                datetime.strptime("13-04-1995", "%d-%m-%Y")
            ),
            datetime,
        )

    def test_datetime_date(self):
        self.assertIsInstance(
            SkillYearsExperienceField.get_years_experience("13-04-1995"), datetime
        )

    def test_year_calculation(self):
        self.assertEqual(SkillYearsExperienceField.days_to_years(731), 3)
