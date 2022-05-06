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
  - :heavy_check_mark: **ConfigMap (p/ variáveis de ambiente)**
  - :heavy_check_mark: **ConfigMap (p/ arquivo montado em volume)**
  - :heavy_check_mark: **Secret**

<br /> <br />

# How to start (to development)

1. **Install Kind;**
2. **Create `Cluster;`** Ex: `kind create cluster --config=k8s/kind.yml --name=kind-cluster`
3. **Install `metrics-server` without TLS;** Ex: `kubectl apply -f k8s/metrics-server.yml`
4. **Apply some setting/change;** Ex: `kubectl apply -f k8s/deployment.yml`

### Don't forget of:

- Apply other settings as example: `Secret`, `ConfigMap`
  #### Example of needs to `k8s/deployment.yml`
  - `kubectl apply -f k8s/configmap-env.yml`
  - `kubectl apply -f k8s/configmap-file.yml`
  - `kubectl apply -f k8s/secret.yml`
