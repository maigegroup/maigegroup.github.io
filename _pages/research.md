---
layout: default
title: Research
permalink: /research/
<!-- description: A growing collection of your cool projects. -->
nav: true
nav_order: 2
---


# Population Genetics

We are interested in genetic variant effects on human traits, for example, disease risk, but additionally molecular traits such as gene expression. In particular, we develop methods sensitive enough to detect effects that, while subtle, are critical for unraveling biological mechanisms. This includes effects of rare variants, which are found in few individuals but play an outsized role in disease. These are difficult to study using classical statistics, but they lend themselves to modeling using AI models trained on genomic and protein sequences. It also includes trans-eQTLs, which can be used to understand gene–gene regulatory relationships and how they are disrupted in disease. Our methods aim to fully exploit the single-cell nature scRNA-seq data while also respecting biological principles such as shared regulation of pathways.

## Related publications

Vagiaki, D., Heinen, T., Saraswat, M., Clarke, B. & Stegle, O., 2026. Mapping trans-eQTLs at single-cell resolution using Latent Interaction Variational Inference. bioRxiv. DOI: [10.64898/2026.02.04.703363](https://dx.doi.org/10.64898/2026.02.04.703363)

Clarke, B., Holtkamp, E., Öztürk, H., Mück, M., Wahlberg, M., Meyer, K., Munzlinger, F., Brechtmann, F., Hölzlwimmer, F. R., Lindner, J., Chen, Z., Gagneur, J. & Stegle, O., 2024. Integration of variant annotations using deep set networks boosts rare variant association testing. Nat Genet. DOI: [10.1038/s41588-024-01919-z](https://dx.doi.org/10.1038/s41588-024-01919-z)


# Gene Regulatory Mechanisms

Our group builds causal inference methods for reconstructing gene regulatory networks from interventional data, especially CRISPR Perturb-seq screens. For the challenging task of teasing apart direct causal effects from noisy total causal effect measurements, we use mathematically inspired techniques such as parameter learning for dynamical systems. Our current focus lies in combining gene regulatory network inference with population genetics and other modalities in order to better understand regulatory mechanisms behind traits with complex genetic architectures. This includes, for example the rare variant genetic effects on traits and trans-eQTL effects on gene regulation described above. We are also interested in sequence-to-function models of gene regulation, and in using Perturb-seq screens in organoids to model gene regulation in a more realistic biological context.

## Related publications

Rohbeck, M., Clarke, B., Mikulik, K., Pettet, A., Stegle, O. & Ueltzhöffer, K., 2024. Bicycle: Intervention-Based Causal Discovery with Cycles, in: Proceedings of the Third Conference on Causal Learning and Reasoning, PMLR. [https://proceedings.mlr.press/v236/rohbeck24a.html](https://proceedings.mlr.press/v236/rohbeck24a.html)
