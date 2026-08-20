---
layout: single
title: "Research"
permalink: /research/
---

## Current Projects
  * **Threat-aware Navigation, Sensing, and Communication** (Air Force Research Laboratory, flowthrough DCS Corporation; 2026-2028, with D. Maity): The goal of this project is to develop threat avoidance behaviors for fixed-wing aircraft, including tactics for evading/avoiding heterogeneous moving threats while balancing risk, mission execution and considering for environment disturbances including wind and communication denial.
  * **Precision Control of High-speed Autonomous Vehicles under High Disturbances** (Army STTR Phase II, flowthrough Corvid Technologies; 2025-2027, with A. Willis, D. Maity): This project seeks the development and demonstration of algorithms that support near-optimal control of autonomous high speed aerial vehicles in real time, with precision, and in challenging and adversarial environments.

## Past Sponsored Research
  * **Maximizing Power Generation of Wave Energy Converter Farms through Coupled Control and Estimation** (Coastal Studies Institute; 2024-2025, with D. Maity)
  * **Precision Control of High-speed Autonomous Vehicles under High Disturbances** (Army STTR Phase I, flowthrough Corvid Technologies; 2023-2024, with A. Willis, D. Maity, and Corvid Technologies)
  * **ERI: Wind Field Estimation and Path Planning** (National Science Foundation; 2023-2025, with M. Uddin)
  * **Evaluation of Unmanned Surface Vessel Technology for Bathymetric Surveying of Inland Environments** (NC Department of Transportation; 2023-2025)
  * **Path Planning for Dynamic Engagement Zone Avoidance and Gliding Flight Optimization** (AFOSR Summer Faculty Fellowship Program; 2023)
  * **Autonomous Systems and Robotics** (Defensewerx; 2023, with J. Conrad and A. Willis)

## Recent Collaborations
  * **Safe-to-Unmask Behaviors** (Naval Research Laboratory; 2025-2026 collaboration with J. McMahon, J. Turner, and P. Baldoni)
  * **Determination Real-Time of Energy-Management for Aircraft Maneuverability – Project Have DREAM** (US Air Force Test Pilot School; 2025, collaboration with J. Peterson and I. Weintraub)

## Current/Past Sponsors & Collaborators
<figure class="fig">
  <img src="{{ "/assets/images/2026-03/sponsors.png" | relative_url }}" alt="Logos of ARSL sponsors and collaborators: DEFENSEWERX, the Air Force Research Laboratory, the U.S. Army SBIR/STTR program, the U.S. Naval Research Laboratory, the National Science Foundation, the Coastal Studies Institute, and the N.C. Department of Transportation.">
</figure>
## Research Areas
### (1) Uncrewed vehicles in flow-fields and complex disturbances
This research investigates flow-field mapping/estimation and optimization-based control strategies to improve the robustness and safety of atmospheric and ocean vehicles in strong disturbances. 

<figure class="fig">
  <img src="{{ "/assets/images/2025-10/flow_work-1.png" | relative_url }}" alt="Seven-panel figure on vehicles in flow fields: collaborative sensing with ultrasonic anemometers, urban wind-field mapping by Gaussian process regression, batch flow-field estimation from ground velocity and heading, quadrotor response to an air vortex cannon, takeoff trajectory planning in an uncertain wind field, quadrotor flight in a CFD-generated urban wind field, and a model of the response to a blast pressure wave.">
</figure>
#### Examples of past and ongoing work
  * Modeling and control of a UAV in a blast pressure wave [[Link](https://doi.org/10.2514/6.2025-0659)]
  * Estimating urban wind fields [[Link](https://doi.org/10.2514/6.2025-2282)]
  * Batch estimation of a steady, uniform, flow-field from ground velocity and heading measurements [[Link](https://arxiv.org/pdf/2402.17078.pdf)]
  * Quadrotor takeoff trajectory optimization aided by wind-sensing infrastructure [[Link](https://arxiv.org/pdf/2402.01518.pdf)]
  * Quadrotor flight simulation in a CFD-generated urban wind field [[Link](https://doi.org/10.1109/AERO58975.2024.10521032)]
  * Feasible Dubins paths in the presence of unsteady velocity disturbances: [[Link](https://doi.org/10.2514/1.G000629)]
  * Novel underwater glider designs for operation in significant currents [[Link]](https://doi.org/10.23919/OCEANS.2015.7401980), [[Link]](http://hdl.handle.net/10919/82062), [[Link]](https://doi.org/10.1109/OCEANS.2012.6404989), [[Link]](https://doi.org/10.1109/OCEANS.2012.6404993)

### (2) Motion control behaviors that adapt to uncertain and/or dynamic processes
This research investigates the design of autonomous motion control algorithms or “behaviors” that allow a mobile robots (or a team of robots) to intelligently adapt to various processes in the environment. Uncertain processes can static or dynamic and discrete (e.g., when tracking an object of interest with noisy sensors) or continuous (e.g., when mapping an uncertain spatial field). Applications of this research include target tracking/surveillance with mobile robots, cooperative navigation of multi-robot teams, and informative path planning to adaptively collect data. 

<figure class="fig">
  <img src="{{ "/assets/images/2025-10/behaviors_work.png" | relative_url }}" alt="Six-panel figure on adaptive motion-control behaviors: urban mapping and search using mutual information, occlusion-aware ground target tracking by a Dubins vehicle using visibility volumes, underwater vehicle behaviors for passive sonar target tracking, path planning for a cooperative navigation aid serving multiple agents, planar formation control of a school of robotic fish, and adaptive sampling of a Gaussian spatial process by a heterogeneous robot team.">
</figure>
#### Examples of past and ongoing work
  * Multi-vehicle cooperative navigation with intermittent aiding: [[Link](https://arxiv.org/pdf/2402.17071.pdf)]
  * Autonomous sensing of a Gaussian spatial process (e.g., bathymetry) with multiple heterogeneous agents: [[Link](https://www.techrxiv.org/doi/full/10.36227/techrxiv.171340715.51711123/v1)]
  * Information-theoretic guidance of a quadrotor team to balance mapping and search in an urban environment: [[Link](https://doi.org/10.1109/LRA.2020.2966394)]
  * Adaptive behaviors for passive sonar tracking of multiple surface vessels with an autonomous underwater vehicle: [[Link](https://doi.org/10.1109/JOE.2018.2817268)] [[Link](https://doi.org/10.1109/JOE.2020.3015415)]
  * Search planning in a large state space with environmentally varying sensor performance: [[Link](https://doi.org/10.1109/IROS40897.2019.8967898)] [[Link](https://doi.org/10.1109/IROS.2017.8202142)]
  * Planar formation control of bio-inspired underwater vehicles through flow sensing: [[Link](https://doi.org/10.3389/fcteg.2021.782121)] [[Link](https://cdcl.umd.edu/papers/iros23.pdf)]

### (3) Trajectory optimization and optimal path planning
This research investigates optimal path planning of aircraft, spacecraft, and ocean vehicles using tools from nonlinear optimal control theory or robotics (Pontryagin’s Minimum Principle, model-predictive control, sampling-based motion planning, etc.). Reference paths are a fundamental component of a guidance, navigation, and control (GNC) system. Optimal path planning typically aims to minimize/maximize some performance criteria such as time, energy, or risk.

<figure class="fig">
  <img src="{{ "/assets/images/2025-10/dubins_work-2.png" | relative_url }}" alt="Seven-panel figure on trajectory optimization: maximum kinetic energy paths for a decaying-speed Dubins vehicle, sampling-based risk-aware planning around dynamic engagement zones, energy-optimal glider paths with speed and load factor controls, the orbiting Dubins traveling salesman problem, time-optimal planning for a variable-speed kinematic car, and minimum-time Dubins airplane inspection tours with visibility and dwell constraints.">
</figure>
#### Examples of past and ongoing work
  * Spacecraft trajectories with optimized thruster allocation
  * Risk-aware path planning around dynamic engagement zones: [[Link](https://arxiv.org/pdf/2403.05480.pdf)]
  * Maximum kinetic energy paths for gliding flight vehicles: [[Link](https://doi.org/10.2514/6.2025-1351)]
  * Minimum potential energy paths in gliding flight: [[Link](https://doi.org/10.2514/1.G001345)], [[Link](https://journals.sfu.ca/ts/index.php/ts/article/view/1246)],
  * Time-optimal trajectories for a Dubins car with variable speed (and turn rate) controls: [[Link](https://doi.org/10.2514/1.G001317)]
  * The orbiting Dubins traveling salesman problem (ODTSP): [[Link](https://doi.org/10.1007/s10514-020-09946-5)]
  * Planning visual inspection tours for a 3D Dubins airplane model in an urban environment: [[Link]](https://arc.aiaa.org/doi/10.2514/6.2023-0108)