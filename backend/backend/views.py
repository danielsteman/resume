from rest_framework.views import APIView
from django.http import JsonResponse
from resume.models import ClusterData


class ClusterModelResultsView(APIView):
    def get(self, request, format=None):
        data = list(ClusterData.objects.values())
        return JsonResponse({"data": data})
