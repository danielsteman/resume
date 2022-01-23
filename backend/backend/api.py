from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter

# from rest_framework.routers import DefaultRouter
# from .views import ClusterModelResultsView

content_api_router = WagtailAPIRouter("wagtailapi")

content_api_router.register_endpoint("pages", PagesAPIViewSet)
content_api_router.register_endpoint("images", ImagesAPIViewSet)
content_api_router.register_endpoint("documents", DocumentsAPIViewSet)

# ml_api_router = DefaultRouter()
# ml_api_router.register("results", ClusterModelResultsView)
