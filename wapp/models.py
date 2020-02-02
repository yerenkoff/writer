import os
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.dispatch import receiver

# Create your models here.
def contact_default():
    return {}

class Writer(models.Model):
	data = JSONField(default=contact_default)

class Image(models.Model):
    writer = models.ForeignKey(Writer, on_delete=models.CASCADE)
    section = models.CharField(max_length=100, default='')
    image = models.ImageField(upload_to='images/', default='')

@receiver(models.signals.post_delete, sender=Image)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
    Deletes file from filesystem
    when corresponding `MediaFile` object is deleted.
    """
    print(instance.image)
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)