# Fullcycle3.0-kubernetes

Este repositório é referente ao conteúdo no módulo **Kubernetes** do curso **FullCycle 3.0**

## Characteristics:

- :heavy_check_mark: **kind**
- :heavy_check_mark: **Docker**
- :heavy_check_mark: **Node + express + docker + Typescript**
- :heavy_check_mark: **Kubernetes**
  - :heavy_check_mark: **Pod**
  - :heavy_check_mark: **ReplicaSet**
  - :heavy_check_mark: **Service - ClusterIP**
  - :heavy_check_mark: **Service - LoadBalancer**
  - :heavy_check_mark: **Deployment**
    - :heavy_check_mark: **Liveness (Probe)**
    - :heavy_check_mark: **Readiness (Probe)**
    - :heavy_check_mark: **Startup (Probe)**
    - :heavy_check_mark: **Resources Control**
    - :heavy_check_mark: **PersistentVolume**
    - :heavy_check_mark: **PersistentVolumeClaim**
  - :heavy_check_mark: **ConfigMap (p/ variáveis de ambiente)**
  - :heavy_check_mark: **ConfigMap (p/ arquivo montado em volume)**
  - :heavy_check_mark: **Secret**
  - :heavy_check_mark: **HPA (HorizontalPodAutoscaler)**
  - :heavy_check_mark: **StatefulSet**
  - :heavy_check_mark: **Ingress**
  - :heavy_check_mark: **ClusterIssuer**
  - :heavy_check_mark: **ServiceAccount**

<br /> <br />

# How to start (to development)

1. **Install Kind;**
2. **Create `Cluster;`** Ex: `kind create cluster --config=k8s/kind.yml --name=kind-cluster`
3. **Install `metrics-server` without TLS;** Ex: `kubectl apply -f k8s/metrics-server.yml`
   - Make sure that `AVAILABLE` from `v1beta1.metrics.k8s.io` is `True` (use `kubectl get apiservices`)
4. **Apply some setting/change;**
   - Apply other settings as example: `Secret`, `ConfigMap`, `HorizontalPodAutoscaler` ([see more in "Don't forget of"](https://github.com/henriqueholtz/fullcycle3.0-kubernetes#dont-forget-of))
   - Apply the Deployment: `kubectl apply -f k8s/deployment.yml`

### Don't forget of:

- Apply other settings as example: `Secret`, `ConfigMap`, `HorizontalPodAutoscaler`, `PersistentVolumeClaim`, etc...
  #### Example of needs to `k8s/deployment.yml`
  - `kubectl apply -f k8s/configmap-env.yml`
  - `kubectl apply -f k8s/configmap-file.yml`
  - `kubectl apply -f k8s/secret.yml`
  - `kubectl apply -f k8s/hpa.yml`
  - `kubectl apply -f k8s/pvc.yml`

## How to see HPA in activity

- Use `Fortio` to simulate a stress test

  ```
  kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 200 -t 120s -c 30 "http://nodeserver-service:3000/"
  ```

- In another prompt: `watch -n1 kubectl get hpa`
- In another prompt: `watch -n1 kubectl get pods`
