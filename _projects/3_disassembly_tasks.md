---
layout: page
title: Robotic Disassembly and Grasping 
description: Dealing with Uncertainty
img: assets/img/RL_viral.png
importance: 1
category: current
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/overview_viral.png" title="RL for disassembly tasks summary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of {% cite galayia2025extraction %}.
</div>

Our research in robotic disassembly and grasping addresses the difficulty of manipulating objects, particularly in tasks involving non-rigid or non-regular components, which are common in manufacturing and recycling. A major focus is the use of multimodal sensing and Reinforcement Learning (RL) to handle the high positional and orientation uncertainties inherent in these tasks {% cite galayia2025extraction, Galaiya2024-ih %}.

We have successfully applied these principles to the challenging task of non-regular peg extraction from industrial trays. By leveraging compliant tactile sensing modules—like the BioIn-Tacto sensor—integrated with an RL framework, we enable the robot to adapt its grasp approach and extraction strategy in real-time, even when the initial object pose is unknown {% cite galayia2025extraction %}. This work demonstrates a significant step toward developing robust, generalized policies for robotic manipulation in unstructured environments.

Furthermore, we investigated the use of kinesthetic and tactile information for data-driven analysis to enhance object classification and recognition during complex disassembly and grasping tasks {% cite de2015data, cretu2015computational %}. This foundational work has laid the groundwork for using rich sensory data to improve the robotic understanding of object properties and facilitate more intelligent and adaptable manipulation strategies.