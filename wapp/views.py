from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
import json
from .models import *
# Create your views here.
# info = {}
moreCounter = 6

def index(request):
	global moreCounter
	moreCounter = 6
	info = {}
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
	# print(info)
	# print(info)
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
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
		print(len(Writer.objects.all()))
	print(moreCounter)
	print(len(Writer.objects.all()) <= moreCounter)
	context = {
		'data': json.dumps(info),
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return render(request, 'wapp/admin.html', context=context)

def delete(request):
	global moreCounter
	print(request.POST.get("id"))
	for w in Writer.objects.all():
		if list(w.data.keys())[0] == request.POST.get("id"):
			print(list(w.data.keys())[0])
			w.delete()
	# print(Writer.objects.get(data__contains=[request.POST.get("id")]))
	# Writer.objects.get()
	data = {}
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		data = {**data, **i.data}
	# print(info)
	# z = {**Writer.objects.order_by('-id')[0].data, **Writer.objects.order_by('-id')[1].data}
	response_data = {
		'data': data,
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def more(request):
	# print("moreCounter")
	
	global moreCounter
	print("m", moreCounter)
	moreCounter = moreCounter + 6
	print("m", moreCounter)
	# print("hey", moreCounter)
	info = {}
	for i in Writer.objects.all().order_by('-id')[:moreCounter]:
		info = {**info, **i.data}
	# for w in Writer.objects.all():
	# 	if list(w.data.keys())[0] == request.POST.get("id"):
	# 		print(list(w.data.keys())[0])
	# 		w.delete()
	# print(Writer.objects.get(data__contains=[request.POST.get("id")]))
	# Writer.objects.get()
	# data = {}
	# for i in Writer.objects.all().order_by('-id'):
	# 	data = {**data, **i.data}
	# print(info)
	# z = {**Writer.objects.order_by('-id')[0].data, **Writer.objects.order_by('-id')[1].data}
	print("COUNTER", len(Writer.objects.all()) <= moreCounter)
	response_data = {
		'data': info,
		'moreCounter': len(Writer.objects.all()) <= moreCounter,
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def newPost(request):
	# print("====================")
	# print(request.POST.get("info"))
	# writer = Writer(data={'breed': 'labrador'})
	# writer.save()
	# Writer.objects.all().delete()

	# print(type({'breed': 'collie', 'owner': None}))
	# print(Writer.objects.all())
	# Writer.objects.create(data=json.loads(request.POST.get("info")))
	# print("-------------------")
	# # print(json.loads(request.POST.get("info")))
	# # print(request.FILES.getlist('image'))
	# # print(request.FILES.get('bioImage', False))
	# # for i in request.FILES:
	# print(request.FILES)
	# print("-------------------")
	# w = json.loads(request.POST.get("info"))
	# w[list(w)[0]]['surname'] = "GOGOL"
	# w[list(w)[0]]['images'] = list(w[list(w)[0]]['images'])
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
	# print("-------------------")
	# print(info)
	# print(request.FILES.getlist('image')[0])
	# print("-------------------")
	# for i in Image.objects.all():
	# 	print(i.image.url)
	# print(info[list(info)[0]]['museums'])
	# print("-------------------")
	for i in info[list(info)[0]]['images']:
		print("LIST INFO: ")
		info[list(info)[0]]['images'][int(i)] = Image.objects.filter(writer=writer).filter(section="images")[int(i)].image.url

	for i in info[list(info)[0]]['bio']:
		counter = 0
		if info[list(info)[0]]['bio'][i][0] == "img":
			info[list(info)[0]]['bio'][i][1] = Image.objects.filter(writer=writer).filter(section="bio")[counter].image.url
			counter += 1

	for i in info[list(info)[0]]['museums']:
		counter = 0
		if info[list(info)[0]]['museums'][i][0] == "img":
			info[list(info)[0]]['museums'][i][1] = Image.objects.filter(writer=writer).filter(section="museums")[counter].image.url
			counter += 1

	for i in info[list(info)[0]]['beloved']:
		counter = 0
		if info[list(info)[0]]['beloved'][i][0] == "img":
			info[list(info)[0]]['beloved'][i][1] = Image.objects.filter(section="beloved")[counter].image.url
			counter += 1
	writer.data = info
	writer.save()

		# print(int(i))
	# print(w)
	# for i in Image.objects.all():
	# 	print(i.section)
	# print("-------------------")
	# print(writer.data)
	# print("-------------------")
	# Writer.objects.all().delete()
	# print("IS ", w)
	# z = {**w[list(w)[0]]['images'], **w[list(w)[0]]['bio']}
	# for i in w[list(w)[0]]['images']:
	# 	print("IMAGE")
	# Writer.objects.order_by('-id')[0].update(data__gogol__name='Steve')
	# writers = []
	data = {}
	for i in Writer.objects.all().order_by('-id'):
		data = {**data, **i.data}
	# print(info)
	# z = {**Writer.objects.order_by('-id')[0].data, **Writer.objects.order_by('-id')[1].data}
	response_data = {
		'data': data
	}
	return HttpResponse(json.dumps(response_data), content_type="application/json")