from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter

content_api_router = WagtailAPIRouter("wagtailapi")

content_api_router.register_endpoint("pages", PagesAPIViewSet)
content_api_router.register_endpoint("images", ImagesAPIViewSet)
content_api_router.register_endpoint("documents", DocumentsAPIViewSet)
