# KitchenMind

Your second brain for cooking.

KitchenMind is a React web application that helps users decide what to cook with the ingredients they already have at home.

Instead of browsing large recipe databases, the system generates a concrete recipe suggestion based on available ingredients.

The goal is to reduce everyday decision friction around cooking.

---

# The Problem

After a long workday many people experience decision fatigue when choosing what to cook.

Even when ingredients are already available, turning them into a meal idea requires mental effort.

Most recipe platforms increase this friction by presenting hundreds of options that require browsing and filtering.

KitchenMind explores a different approach:

Start from the ingredients — not from the recipes.

---

# Core Idea

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

# Core Features

### Ingredient-based recipe suggestions

Users enter ingredients they already have and receive an AI-generated recipe suggestion.

### Personal recipe collection

Recipes can be saved, edited, and organized in a personal cookbook.

### AI-assisted cooking ideas

When inspiration is missing, the system generates cooking ideas based on available ingredients.

---

# Design Principle

One deliberate UX decision is that the system generates **only one recipe suggestion at a time**.

Instead of presenting many options, users simply decide:

• cook this  
• show another suggestion

This interaction model reduces cognitive load and keeps the decision process simple.

---

# Tech Stack

Frontend

React  
TypeScript  
Vite

State Management

TanStack Query

Backend

Supabase (Auth + PostgreSQL)

UI

Tailwind CSS  
shadcn/ui  
Radix UI

---

# Development Goals

This project was built as a portfolio project to explore:

• clean frontend architecture  
• thoughtful UX design  
• integration of AI-generated content  
• structured personal data systems

---

# Future Ideas

• AI cooking tips attached to recipes  
• different interaction modes (ingredient mode, low-energy mode, healthy mode)  
• smarter recipe suggestions based on past cooking behavior
