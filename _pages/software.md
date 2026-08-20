---
layout: single
title: "Software"
permalink: /software/
---

Code and datasets from the lab are released on GitHub at
[github.com/robotics-uncc](https://github.com/robotics-uncc). Each description
below is taken from that repository's own README. Licenses are as stated on
GitHub; check the repository itself before reusing anything.

## Path planning
<ul class="repo-list">
<li class="repo" markdown="1">

**[VariableSpeedDubins](https://github.com/robotics-uncc/VariableSpeedDubins)**
<span class="repo-meta">C++ &middot; MIT</span>

Plan time-optimal paths with both speed and turn-rate controls, for a vehicle
whose turn radius varies with the speed it flies.
</li>
<li class="repo" markdown="1">

**[ConvectedDubins](https://github.com/robotics-uncc/ConvectedDubins)**
<span class="repo-meta">C++ &middot; MIT</span>

Plan time-optimal paths in a known, steady wind.
</li>
<li class="repo" markdown="1">

**[RobustDubins](https://github.com/robotics-uncc/RobustDubins)**
<span class="repo-meta">C++ &middot; MIT</span>

Plan standard or "inflated radius" Dubins paths, holding turn-rate margin in
reserve for unsteady disturbances with a known upper bound.
</li>
<li class="repo" markdown="1">

**[DubinsFreeHeadingPlanner](https://github.com/robotics-uncc/DubinsFreeHeadingPlanner)**
<span class="repo-meta">MATLAB &middot; MIT</span>

Join an initial state to a terminal position while ignoring the final heading,
for a given turn radius.
</li>
<li class="repo" markdown="1">

**[ODTSP](https://github.com/robotics-uncc/ODTSP)**
<span class="repo-meta">C++</span>

The orbiting Dubins traveling salesman problem: minimum-time inspection tours
that orbit each target rather than passing through it.
</li>
</ul>

## Visibility-aware planning in urban environments
<ul class="repo-list">
<li class="repo" markdown="1">

**[VisualTour3DDubins](https://github.com/robotics-uncc/VisualTour3DDubins)**
<span class="repo-meta">Python &middot; Apache-2.0</span>

A Dubins airplane with a gimbaled camera inspects a series of targets in a 2.5D
urban environment. The minimum-time tour is planned as a Dubins traveling
salesperson problem with neighborhoods, the neighborhoods being 3D visibility
volumes approximated by triangular meshes.
</li>
<li class="repo" markdown="1">

**[DubinsVisibilityTracking](https://github.com/robotics-uncc/DubinsVisibilityTracking)**
<span class="repo-meta">Jupyter Notebook &middot; Apache-2.0</span>

A Dubins vehicle with a gimballed camera tracks a moving point through an urban
environment while holding line of sight to it.
</li>
<li class="repo" markdown="1">

**[DubinsVisibilitySearch](https://github.com/robotics-uncc/DubinsVisibilitySearch)**
<span class="repo-meta">Jupyter Notebook &middot; Apache-2.0</span>

<!-- TODO(Artur): this repository's README is a title line only, so there is
     nothing to describe it from. One sentence here, please — it is the only
     entry on this page not taken from a README. -->
Occlusion-aware target search. *Description pending.*
</li>
</ul>

## Simulation
<ul class="repo-list">
<li class="repo" markdown="1">

**[quadBlastSim](https://github.com/robotics-uncc/quadBlastSim)**
<span class="repo-meta">MATLAB &middot; MIT</span>

Fast estimation of the diffractive loads acting on a quadrotor UAV in the
moments after a nearby explosion. The airframe is approximated as spheres
joined by rods and a convected blast pressure field is integrated over that
geometry, so a 90 ms rigid-body simulation runs in about a second. Reproduces
the figures of the paper it accompanies.
</li>
</ul>

## Datasets
<ul class="repo-list">
<li class="repo" markdown="1">

**[USV Dataset](https://github.com/robotics-uncc/USV_Dataset)**
<span class="repo-meta">MATLAB</span>

Mass properties and performance characteristics of 91 uncrewed surface vessels,
collected in August 2025 — weight, endurance, length, speed, and country of
origin — with a script that generates the scatter plots and histograms.
</li>
<li class="repo" markdown="1">

**[VSTOL UAS Database](https://github.com/robotics-uncc/VSTOL_UAS_Database)**
<span class="repo-meta">MATLAB</span>

Mass properties and performance characteristics of nearly two hundred
vertical/short takeoff and landing uncrewed aircraft — maximum gross takeoff
weight, endurance, size, speed, payload and payload fraction — with a script
that generates the plots and statistics.
</li>
</ul>