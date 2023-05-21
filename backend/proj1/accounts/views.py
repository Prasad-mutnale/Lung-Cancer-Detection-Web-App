from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.auth import AuthToken
from rest_framework import status
# from .serializers import RegisterSerializer
from knox.auth import TokenAuthentication
from .serializers import LoginSerializer
from django.contrib.auth import authenticate
from .serializers import RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions
from accounts.serializers import PatientSerializer
from accounts.models import Patientdb
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth.models import User




class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return super().post(request, format=None)
        else:
            return Response({'error': 'Invalid username or password.'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)
        return Response({'success': 'Logged out successfully.'})



class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            _, token = AuthToken.objects.create(user)
            return Response({
                    'user_info':{
                    'id':user.id,
                    'username':user.username,
                    'email':user.email
                    },
                'token':token
                })
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def get_user_data(request):
    user = request.user
    
    if user.is_authenticated:
        return Response({
            'user_info':{
                'id':user.id,
                'username':user.username,
                'email':user.email
            },
        })
        
    return Response({'error':'not authenticated'}, status=400)

class PatientView(APIView):
    def post(self, request, format=None):
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Patient data Uploaded Successfully',
            'status':'success','candidate':serializer.data},
            status = status.HTTP_201_CREATED)
        return Response(serializer.errors)
    
    
    
    def get(self, request, format=None):
        candidates = Patientdb.objects.all()
        serializer = PatientSerializer(candidates, many=True)
        return Response({'status':'success','candidates':serializer.data}, status=status.HTTP_200_OK)
    





# Patient details 
@api_view(['GET'])
def get_patient_details(request):
    name = request.GET.get('name')

    if not name:
        return Response({'error': 'Please provide a name to search for.'}, status=400)
    
    patients = Patientdb.objects.filter(name__icontains=name)

    if not patients:
        return Response({'error': 'Patient not found.'}, status=404)

    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)




# Login details 
@api_view(['GET'])
def getUserDetails(request):
    username = request.GET.get('username')

    if not username:
        return JsonResponse({'error': 'Username parameter required.'}, status=400)

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found.'}, status=404)

    response = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
    }

    return JsonResponse(response)




@api_view(['GET'])
def edit_patient_details(request):
    id = request.GET.get('id')

    if not id:
        return Response({'error': 'Please provide a name to search for.'}, status=400)
    
    patients = Patientdb.objects.filter(id=id)

    if not patients:
        return Response({'error': 'Patient not found.'}, status=404)

    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)
