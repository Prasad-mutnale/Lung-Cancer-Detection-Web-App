from django.db import models

from keras_preprocessing.image import load_img
# from tensorflow.keras.preprocessing.image import load_img
# Create your models here.
import os
import cv2
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model




 
    
    
class Patientdb(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    dob = models.DateField(auto_now=False, auto_now_add=False)
    state = models.CharField(max_length=50)
    gender = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    pimage = models.ImageField()
    classified = models.CharField(max_length=200,blank=True)
    uploaded = models.DateTimeField(auto_now_add=True) 
    phone_number = models.CharField(max_length=100)
    
    def save(self,*args,**kwargs): # code pre trained model and  the whole classification take place
        print(self.pimage.path)
        print("try starts")
        try:
            #img = load_img(self.pimage.path, target_size=(299,299))
             # get the absolute path of the file
            model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'resnet50.h5')

            # load the model using the absolute path
            model = load_model(model_path)

            # Initialising Class Labels
            class_names=['Bengin case','Malignant case','Normal case']
            #print(class_names)

            #Reading test image
            img_array=load_img(self.pimage.path, target_size=(512,512))

            #Predicting
            img_array=np.expand_dims(img_array,axis=0)
            pred=model.predict(np.array(img_array))
            output_class=class_names[np.argmax(pred)]
            print("The Predicted Class is ",output_class)
            self.classified = str(output_class)
            print("success")

        except Exception as e:
            print('classification failed',e)
        super().save(*args,**kwargs)