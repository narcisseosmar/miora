
from django.http import JsonResponse
from kubernetes import client, config

config.load_kube_config()

def gePodStatus(request, pod_name):
    v1 = client.CoreV1Api()
    try:
        pod = v1.read_namespaced_pod(name=pod_name, namespace='default')
        status = pod.status.phase
        return JsonResponse({'status': status})
    except client.exceptions.ApiException as e:
        return JsonResponse({'error': str(e)}, status=400)

def getAllPods(request):
    v1 = client.CoreV1Api()
    try:
        pods = v1.list_namespaced_pod(namespace='default')
        pod_list = [{'name': pod.metadata.name, 'status': pod.status.phase} for pod in pods.items]
        return JsonResponse({'pods': pod_list})
    except client.exceptions.ApiException as e:
        return JsonResponse({'error': str(e)}, status=400)

