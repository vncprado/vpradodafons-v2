---
layout: page
title: Bioin-Tacto Sensor
description: Development of a bio-inspired tactile sensing
img: assets/img/robot_bioin-tacto.jpg
importance: 2
category: current
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/biointacto_summary.jpg" title="Bioin-Tacto sensor visual abstract" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bioin-Tacto sensor visual abstract.
</div>

The BioIn-Tacto is a compliant, multi-modal tactile sensing module designed for various robotic tasks {% cite de2023bioin %}. Its development focused on creating a biology-inspired sensor that can provide rich, diverse data for complex robotic manipulation and sensing challenges {% cite de2023bioin %}. The original design files and source code for the sensor were made publicly available to foster further research and adaptation {% cite De_Oliveira2022-ql %}.

A key feature of the BioIn-Tacto sensor is its ability to facilitate advanced applications. For instance, the sensor's compliant tactile perception has been successfully leveraged for a haptic "blind" surface reconstruction task, showcasing its utility in environments where visual feedback may be limited or unavailable {% cite cheret2024leveraging %}. The sensor has also been utilized in studies exploring tactile temporal features for object pose estimation during robotic manipulation {% cite galaiya2023exploring %}.

Furthermore, the sensor's capabilities have led to the creation of several important datasets to advance the field of robotic tactile sensing, proving its value as a robust data collection platform:

Dynamic texture classification dataset using the module {% cite lima2023multimodal %}.

Datasets specifically collected for robotic tasks like the extraction of non-regular pegs based on the Bioin-Tacto sensor modules {% cite galayia2025multimodal, Galaiya2024-ih %}.

Datasets for tactile textures on uneven surfaces {% cite marzani2025dataset, Marzani2024-xy %}.