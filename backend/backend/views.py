from rest_framework.views import APIView
from rest_framework.response import Response
from django.core import serializers
from resume.models import ClusterData


class ClusterModelResultsView(APIView):
    def get(self, request, format=None):
        data = serializers.serialize("json", ClusterData.objects.all())
        return Response(data)
