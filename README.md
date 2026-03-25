# KitchenMind

Your second brain for cooking.

KitchenMind is a React web application that helps users decide what to cook with the ingredients they already have at home.

Instead of browsing large recipe databases, the system generates a concrete recipe suggestion based on available ingredients.

The goal is to reduce everyday decision friction around cooking.

---

## Concept

KitchenMind explores how systems can guide decisions without overwhelming users — by reducing options instead of expanding them.

Instead of offering endless choices, the system is built around a simple loop:

→ one suggestion
→ one decision
→ immediate action

This shifts cooking from a browsing problem to a decision system.

---

## Status

This project is currently a work in progress.

The current version demonstrates:
• authentication flow (Supabase Auth)
• basic recipe data handling
• initial application architecture

Current focus:
• frontend architecture cleanup
• UX refinement
• building a consistent UI system (planned with Tailwind CSS)

This project is actively developed as a portfolio project with a focus on frontend architecture, UX, and product thinking.

---

## The Problem

After a long workday many people experience decision fatigue when choosing what to cook.

Even when ingredients are already available, turning them into a meal idea requires mental effort.

Most recipe platforms increase this friction by presenting hundreds of options that require browsing and filtering.

KitchenMind explores a different approach:

Start from the ingredients — not from the recipes.

---

## Core Idea

KitchenMind acts like a lightweight cooking assistant.

Instead of browsing recipes, users simply ask:

"What can I cook with what I already have?"

The system then suggests a concrete recipe based on those ingredients.

Users can:

• accept the suggestion
• generate another suggestion
• save the recipe to their personal cookbook

Over time the application becomes a personal cooking knowledge base.

---

## Design Principle

One deliberate UX decision is that the system generates **only one recipe suggestion at a time**.

Instead of presenting many options, users simply decide:

• cook this
• show another suggestion

This interaction model reduces cognitive load and supports fast decision-making.

Each suggestion can include a short explanation ("Why this works") to build trust and reduce hesitation.

---

## Core Features

### Ingredient-based recipe suggestions

Users enter ingredients they already have and receive an AI-generated recipe suggestion.

### Personal recipe collection

Recipes can be saved, edited, and organized in a personal cookbook.

### AI-assisted cooking ideas

When inspiration is missing, the system generates cooking ideas based on available ingredients.

---

## Tech Stack

Frontend
React
TypeScript
Vite

State Management
TanStack Query

Backend
Supabase (Auth + PostgreSQL)

UI (planned)
Tailwind CSS
shadcn/ui
Radix UI

---

## Development Goals

This project was built as a portfolio project to explore:

• clean frontend architecture
• thoughtful UX design
• integration of AI-generated content
• structured personal data systems

---

## Learning

KitchenMind is intentionally built as an evolving system, not a finished product.

Through building it, I explore:

• how to move from abstract ideas to concrete features
• how to structure complexity instead of avoiding it
• how to ship incomplete but functional iterations

This reflects my general approach to development:
Building systems that remain usable and adaptable — even when they are not fully resolved.

---

## Future Ideas

• AI cooking tips attached to recipes
• different interaction modes (ingredient mode, low-energy mode, healthy mode)
• smarter suggestions based on past cooking behavior
