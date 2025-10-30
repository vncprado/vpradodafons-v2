---
layout: page
title: Smart Prosthesis Control
description: Enhancing Usability and Autonomy
img: assets/img/prosthetics.jpg
importance: 1
category: current
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/elahe_summary.gif" title="Prosthetics model training summary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of {% cite mohammadreza2025investigating %}.
</div>

Our work in smart prosthetic control focuses on developing systems that are more intuitive, robust, and less cognitively demanding than traditional myoelectric interfaces. A significant effort has been made toward achieving biosignals-free autonomous control for prosthetic hands, utilizing imitation learning from human demonstrations and vision-only systems to handle grasping and releasing objects of various shapes and weights {% cite shi2025towards %}. This method aims to provide users with a very easy-to-use interface that substantially reduces mental fatigue.

In parallel, we have investigated methods to improve the robustness and accuracy of classic myoelectric pattern recognition (MPR). Research has focused on the impact of various training protocols on MPR control in upper-limb prostheses, showing that incorporating the weight of the prosthetic hand and dynamic arm movements into the training data improves both accuracy and robustness, especially for amputee participants {% cite mohammadreza2025investigating %}.

To further boost performance, we explored multimodal integration, combining sEMG signals with computer vision. We identified a "sweet period" during the early reaching phase where visual data could accurately classify grasp patterns, which, when integrated with sEMG data from the grasp phase, significantly improved overall grasp classification accuracy {% cite wang2022integrating %}. This foundational work is crucial for developing robust, real-time control systems for multi-degree-of-freedom prostheses.

Overall, our research aims to simplify the user experience, moving toward systems that intelligently assist the user and restore a more natural level of functional independence.