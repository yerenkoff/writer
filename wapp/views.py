from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
import json
from .models import *
moreCounter = 6

def index(request):
	global moreCounter
	moreCounter = 6
	info = {}
	for i in Writer.objects.order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
	context = {
		'data': json.dumps(info),
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return render(request, 'wapp/index.html', context=context)

def exit(request):
	logout(request)
	return redirect('/')

@login_required(login_url='/login/')
def admin(request):
	global moreCounter
	moreCounter = 6
	info = {}
	for i in Writer.objects.order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
	context = {
		'data': json.dumps(info),
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return render(request, 'wapp/admin.html', context=context)

def delete(request):
	global moreCounter
	for w in Writer.objects.all():
		if list(w.data.keys())[0] == request.POST.get("id"):
			w.delete()
	data = {}
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		data = {**data, **i.data}
	response_data = {
		'data': data,
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def more(request):
	
	global moreCounter
	moreCounter = moreCounter + 6
	info = {}
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
	a = Writer.objects.order_by('id')[4]
	response_data = {
		'data': info,
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def newPost(request):
	writer = Writer()
	writer.save()
	for i in request.FILES.getlist('image'):
		image = Image(writer=writer, section="images", image=i)
		image.save()
	for i in request.FILES.getlist('bioImage'):
		image = Image(writer=writer, section="bio", image=i)
		image.save()
	for i in request.FILES.getlist('museumsImage'):
		image = Image(writer=writer, section="museums", image=i)
		image.save()
	for i in request.FILES.getlist('belovedImage'):
		image = Image(writer=writer, section="beloved", image=i)
		image.save()
	info = json.loads(request.POST.get("info"))
	info["writer"+str(writer.id)] = info.pop("writer")

	for i in info[list(info)[0]]['images']:
		info[list(info)[0]]['images'][int(i)] = Image.objects.filter(writer=writer).filter(section="images")[int(i)].image.url

	counter = 0
	for i in info[list(info)[0]]['bio']:
		if info[list(info)[0]]['bio'][i][0] == "img":
			info[list(info)[0]]['bio'][i][1] = Image.objects.filter(writer=writer).filter(section="bio")[counter].image.url
			counter += 1

	counter = 0
	for i in info[list(info)[0]]['museums']:
		if info[list(info)[0]]['museums'][i][0] == "img":
			info[list(info)[0]]['museums'][i][1] = Image.objects.filter(writer=writer).filter(section="museums")[counter].image.url
			counter += 1

	counter = 0
	for i in info[list(info)[0]]['beloved']:
		if info[list(info)[0]]['beloved'][i][0] == "img":
			info[list(info)[0]]['beloved'][i][1] = Image.objects.filter(writer=writer).filter(section="beloved")[counter].image.url
			counter += 1
	writer.data = info
	writer.save()
	data = {}
	for i in Writer.objects.order_by('-id')[:moreCounter]:
		data = {**data, **i.data}
	response_data = {
		'data': data,
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")