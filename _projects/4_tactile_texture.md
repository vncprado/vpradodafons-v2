---
layout: page
title: Tactile Surface Reconstruction and Texture Recognition
description: Advanced Multi-Modal Sensing
img: assets/img/surface_reconstruction.png.jpg
importance: 1
category: current
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/surface_overview.png" title="Tactile Surface Reconstruction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of {% cite cheret2024leveraging %}.
</div>

Our research in tactile texture recognition focuses on creating intelligent systems that enable robots to identify and classify surfaces through touch, a crucial capability for complex manipulation in unstructured environments. A significant contribution has been the development of advanced algorithms and the use of multimodal sensing to handle the challenges of real-world scenarios, particularly on uneven or non-planar surfaces.

We have explored the use of data from our compliant sensors, like the BioIn-Tacto, to create comprehensive datasets for dynamic texture classification {% cite lima2023multimodal %}. This data captures rich information including pressure, acceleration, and angular rate, allowing for a detailed analysis of the interaction between the sensor and the texture.

Recent work has focused on leveraging these multimodal data streams with sophisticated deep learning architectures. This includes using Self-Attention Based Neural Networks and Multi-Scale Voting Systems to improve the accuracy and robustness of tactile texture recognition, even when the surface is uneven {% cite khatibi2025tactile, khatibi2025multi %}. This ensures that robots can reliably sense and classify textures, regardless of the complexity or irregularity of the surface geometry {% cite marzani2025dataset, Marzani2024-xy %}. This area of research is fundamental to advancing robotic awareness and interaction capabilities.