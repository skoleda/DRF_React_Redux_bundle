from django.shortcuts import render
from django.views.generic.detail import DetailView
from todos.models import Todo
from os.path import dirname as up


def index(request):
    return render(request, 'index.html')


class TodoDetailView(DetailView):
    model = Todo
    template_name = 'index.html'

