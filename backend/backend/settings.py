from pathlib import Path
import os
from dotenv import load_dotenv
import mimetypes
import django_heroku

mimetypes.add_type("text/css", ".css", True)

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ["DJANGOSECRET"]

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("ENVIRONMENT", False)

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "192.168.2.6",
    "0.0.0.0",
    "daniels-resume.herokuapp.com",
    "www.danielsteman.com",
    "danielsteman.com",
]

# Application definition

INSTALLED_APPS = [
    "wagtail.contrib.forms",
    "wagtail.contrib.redirects",
    "wagtail.embeds",
    "wagtail.sites",
    "wagtail.users",
    "wagtail.snippets",
    "wagtail.documents",
    "wagtail.images",
    "wagtail.search",
    "wagtail.admin",
    "wagtail.core",
    "wagtail.api.v2",
    "wagtail.contrib.modeladmin",
    "modelcluster",
    "taggit",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "resume",
    "backend",
    "core",
    "django_otp",
    "django_otp.plugins.otp_static",
    "django_otp.plugins.otp_totp",
    "two_factor",
]

REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": (
        "djangorestframework_camel_case.render.CamelCaseJSONRenderer",
        "djangorestframework_camel_case.render.CamelCaseBrowsableAPIRenderer",
    ),
    "DEFAULT_PARSER_CLASSES": (
        "djangorestframework_camel_case.parser.CamelCaseFormParser",
        "djangorestframework_camel_case.parser.CamelCaseMultiPartParser",
        "djangorestframework_camel_case.parser.CamelCaseJSONParser",
    ),
}

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "wagtail.contrib.redirects.middleware.RedirectMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django_otp.middleware.OTPMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = True if DEBUG else False

CORS_ORIGIN_WHITELIST = ["http://localhost:3000", "http://localhost:8000"]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "frontend")],  # Added root of frontend project
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ]
        },
    }
]

WSGI_APPLICATION = "backend.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.environ["DBNAME"],
        "USER": os.environ["DBUSER"],
        "PASSWORD": os.environ["DBPASS"],
        "HOST": os.environ["DBHOST"],
        "PORT": "5432",
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation."
        + "UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "CET"

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
STATICFILES_DIRS = (os.path.join(BASE_DIR, "frontend", "build", "static"),)

TEMPLATE_DIRS = (os.path.join(BASE_DIR, "frontend", "build", "static"),)

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"

ADMINS = [("Daniel", "daniel-steman@live.nl")]
MANAGERS = ADMINS

INTERNAL_IPS = ("127.0.0.1", "10.0.2.2")

# WAGTAIL SETTINGS

# This is the human-readable name of your Wagtail install
# which welcomes users upon login to the Wagtail admin.
WAGTAIL_SITE_NAME = "resume"

# Replace the search backend
# WAGTAILSEARCH_BACKENDS = {
#  'default': {
#    'BACKEND': 'wagtail.search.backends.elasticsearch5',
#    'INDEX': 'myapp'
#  }
# }

# Wagtail email notifications from address
# WAGTAILADMIN_NOTIFICATION_FROM_EMAIL = 'wagtail@myhost.io'

# Wagtail email notification format
# WAGTAILADMIN_NOTIFICATION_USE_HTML = True

# Reverse the default case-sensitive handling of tags
TAGGIT_CASE_INSENSITIVE = True

django_heroku.settings(locals())

# two factor auth
LOGIN_URL = "two_factor:login"

# this one is optional
LOGIN_REDIRECT_URL = "two_factor:profile"
