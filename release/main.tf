terraform {
  backend "pg" {
    conn_str = var.connection_string
  }
  required_providers {
    heroku = {
      source  = "heroku/heroku"
      version = "~> 4.0"
    }
  }
}

resource "heroku_app" "resume" {
  name = var.app_name
  region = var.region
}

resource "heroku_addon" "database" {
  app  = heroku_app.resume.name
  plan = "heroku-postgresql:hobby-dev"
}

resource "heroku_addon" "ssl" {
  app  = heroku_app.resume.name
  plan = "ssl"
}

resource "heroku_cert" "ssl_certificate" {
  app               = heroku_app.resume.name
  certificate_chain = file("server.crt")
  private_key       = file("server.key")
  depends_on        = ["heroku_addon.ssl"]
}
