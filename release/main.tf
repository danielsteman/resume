terraform {
  backend "local" {
    path = "terraform/terraform.tfstate"
  }
}

provider "heroku" {
  email   = "daniel-steman@live.nl"
  api_key = var.heroku_api_key
}

variable heroku_api_key {
  type = string
}
