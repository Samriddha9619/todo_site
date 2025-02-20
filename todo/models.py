from django.db import models
from django.utils import timezone

class Todo(model.Model):
    title = models.CharField(max_length=200)
    details = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def _str_(self):
        return self.title
    
