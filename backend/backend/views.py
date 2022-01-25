import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers
from resume.models import ClusterData


class ClusterModelResultsView(APIView):
    def get(self, request, format=None):
        data = serializers.serialize("json", ClusterData.objects.all())
        response = json.loads(data)
        return Response(response, status=status.HTTP_200_OK)
