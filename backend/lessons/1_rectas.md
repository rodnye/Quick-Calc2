---
lesson_id: 25
title: 'Rectas en el Espacio: Dominando las Ecuaciones Vectoriales y Paramétricas'
level: 7
tags: [geometría, álgebra lineal, rectas, vectores, espacio 3D]
estimated_time: 25
prerequisites: [matematica]
---

::::content

## Introduction

Esta es una lección de prueba para testeos.  
Hoy descubrirás cómo describir matemáticamente cualquier recta en el espacio usando vectores y parámetros.  
::::

::::content

## 📍 Ecuación Vectorial de la Recta

La ecuación vectorial nos permite representar cualquier punto de una recta usando un punto de referencia y un vector director. Si tenemos:

- Un punto \\( P_0(x_0, y_0, z_0) \\) por donde pasa la recta
- Un vector director \\( \\vec{v} = (a, b, c) \\) paralelo a la recta

Entonces la ecuación vectorial es:

$$ \\vec{r} = \\vec{r_0} + t\\vec{v} $$
$$ (x, y, z) = (x_0, y_0, z_0) + t(a, b, c) $$

Donde \\( t \\) es un parámetro real que genera todos los puntos de la recta. ✨  
::::

::::question_select

```json
{
  "id": "q1_vectorial",
  "weight": 1.5,
  "type": "select",
  "statement": "Dada la ecuación vectorial \\( (x, y, z) = (1, 2, 3) + t(2, -1, 4) \\), ¿cuál es el vector director de la recta?",
  "options": [
    { "id": "a", "content": "\\( (1, 2, 3) \\)" },
    { "id": "b", "content": "\\( (2, -1, 4) \\)" },
    { "id": "c", "content": "\\( (3, 1, 7) \\)" },
    { "id": "d", "content": "\\( (t, t, t) \\)" }
  ],
  "correct_options": ["b"],
  "solution_steps": [
    {
      "step": 1,
      "description": "La forma general es \\( (x, y, z) = (x_0, y_0, z_0) + t(a, b, c) \\)"
    },
    {
      "step": 2,
      "description": "El vector director es el coeficiente de \\( t \\), es decir \\( (a, b, c) \\)"
    },
    { "step": 3, "description": "En este caso: \\( (2, -1, 4) \\)" }
  ],
  "hints": [
    {
      "id": "hint1",
      "content": "El vector director es el que multiplica al parámetro t"
    },
    {
      "id": "hint2",
      "content": "El punto fijo es el término independiente de t"
    }
  ]
}
```

::::

::::content

## 🔢 Ecuaciones Paramétricas de la Recta

A partir de la ecuación vectorial, podemos obtener las ecuaciones paramétricas separando por componentes:

$$ x = x_0 + at $$
$$ y = y_0 + bt $$
$$ z = z_0 + ct $$

Estas ecuaciones nos dan las coordenadas de cualquier punto de la recta en función del parámetro \\( t \\). Cada valor de \\( t \\) nos da un punto diferente de la recta. 📊  
::::

::::question_solve

```json
{
  "id": "q2_parametricas",
  "weight": 2.0,
  "type": "solve",
  "statement": "Encuentra las ecuaciones paramétricas de la recta que pasa por el punto \\( P(2, -1, 5) \\) y tiene vector director \\( \\vec{v} = (3, 0, -2) \\)",
  "expected_answer": "x = 2 + 3t, y = -1, z = 5 - 2t",
  "solution_steps": [
    {
      "step": 1,
      "description": "Usamos la forma general: \\( x = x_0 + at \\), \\( y = y_0 + bt \\), \\( z = z_0 + ct \\)"
    },
    {
      "step": 2,
      "description": "Sustituimos \\( x_0 = 2 \\), \\( y_0 = -1 \\), \\( z_0 = 5 \\)"
    },
    {
      "step": 3,
      "description": "Sustituimos \\( a = 3 \\), \\( b = 0 \\), \\( c = -2 \\)"
    },
    {
      "step": 4,
      "description": "Obtenemos: \\( x = 2 + 3t \\), \\( y = -1 + 0t = -1 \\), \\( z = 5 - 2t \\)"
    }
  ],
  "hints": [
    {
      "id": "hint1",
      "content": "Recuerda que cada coordenada tiene su propia ecuación paramétrica"
    },
    {
      "id": "hint2",
      "content": "Si una componente del vector director es cero, esa coordenada será constante"
    }
  ]
}
```

::::

::::content

## ⚖️ Ecuaciones Simétricas de la Recta

Si ninguna componente del vector director es cero (\\( a \\neq 0 \\), \\( b \\neq 0 \\), \\( c \\neq 0 \\)), podemos eliminar el parámetro \\( t \\) y obtener las ecuaciones simétricas:

$$ \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} $$

**¡Importante!** Si alguna componente es cero, la forma simétrica cambia. Por ejemplo, si \\( a = 0 \\), entonces:

$$ x = x_0, \\quad \\frac{y - y_0}{b} = \\frac{z - z_0}{c} $$

Esto indica que la recta está en el plano vertical \\( x = x_0 \\). 📐  
::::

::::question_truefalse

```json
{
  "id": "q3_simetricas",
  "weight": 1.5,
  "type": "truefalse",
  "statement": "La recta con ecuaciones \\( x = 2 \\), \\( \\\\frac{y-1}{3} = \\\\frac{z+2}{-1} \\) está contenida en el plano vertical \\( x = 2 \\)",
  "correct_answer": true,
  "explanation": "Cuando la componente x del vector director es cero, la coordenada x es constante (\\( x = 2 \\)), lo que significa que la recta está contenida en el plano vertical \\( x = 2 \\)",
  "hints": [
    {
      "id": "hint1",
      "content": "Analiza qué significa que una coordenada sea constante"
    },
    {
      "id": "hint2",
      "content": "Un plano vertical tiene una coordenada fija y las otras dos variables"
    }
  ]
}
```

::::

::::content

## 🎯 Intersecciones con los Planos Coordenados

Para encontrar los interceptos de una recta con los planos coordenados:

- **Con el plano XY** (\\( z = 0 \\)): Resolver \\( z = 0 \\) para encontrar \\( t \\), luego sustituir en \\( x \\) e \\( y \\)
- **Con el plano XZ** (\\( y = 0 \\)): Resolver \\( y = 0 \\) para encontrar \\( t \\), luego sustituir en \\( x \\) y \\( z \\)
- **Con el plano YZ** (\\( x = 0 \\)): Resolver \\( x = 0 \\) para encontrar \\( t \\), luego sustituir en \\( y \\) y \\( z \\)

Estos puntos son muy útiles para graficar la recta en el espacio. 📈  
::::

::::question_fill

```json
{
  "id": "q4_interceptos",
  "weight": 2.0,
  "type": "fill",
  "statement": "Para la recta \\( x = 1 + 2t \\), \\( y = 3 - t \\), \\( z = 4 + 3t \\), el intercepto con el plano XZ se encuentra cuando [1]. Resolviendo obtenemos \\( t = \\) [2], y el punto de intersección es [3]",
  "blanks": [
    {
      "id": "blank1",
      "correct_answers": ["y = 0", "la coordenada y es cero"],
      "position": 1
    },
    {
      "id": "blank2",
      "correct_answers": ["3", "3.0"],
      "position": 2
    },
    {
      "id": "blank3",
      "correct_answers": ["(7, 0, 13)", "P(7, 0, 13)"],
      "position": 3
    }
  ],
  "complete_solution": "Para el plano XZ, y = 0. Resolvemos 3 - t = 0 ⇒ t = 3. Sustituimos: x = 1 + 2(3) = 7, z = 4 + 3(3) = 13. El punto es (7, 0, 13)",
  "hints": [
    { "id": "hint1", "content": "El plano XZ tiene y = 0" },
    { "id": "hint2", "content": "Encuentra t resolviendo la ecuación de y" }
  ]
}
```

::::

::::content

## 📏 Paralelismo y Perpendicularidad entre Rectas

Dos rectas son **paralelas** si sus vectores directores son paralelos (proporcionales):

$$ \\vec{v}\\\_1 = k\\vec{v}\\\_2 \\quad \\text{para algún } k \\neq 0 $$

Dos rectas son **perpendiculares** si sus vectores directores son ortogonales (producto escalar cero):

$$ \\vec{v}\\\_1 \\cdot \\vec{v}\\\_2 = 0 $$

Estas propiedades nos permiten clasificar la posición relativa de rectas en el espacio. 🔍  
::::

::::question_match

```json
{
  "id": "q5_relaciones",
  "weight": 2.0,
  "type": "match",
  "statement": "Relaciona cada par de vectores directores con la relación entre las rectas",
  "pairs": [
    {
      "id": "pair1",
      "left": "\\( \\vec{v}_1 = (2, 4, 6) \\), \\( \\vec{v}_2 = (1, 2, 3) \\)",
      "right": "Rectas paralelas",
      "match_id": "m1"
    },
    {
      "id": "pair2",
      "left": "\\( \\vec{v}_1 = (1, 0, 2) \\), \\( \\vec{v}_2 = (0, 3, 0) \\)",
      "right": "Rectas perpendiculares",
      "match_id": "m2"
    },
    {
      "id": "pair3",
      "left": "\\( \\vec{v}_1 = (2, 1, -1) \\), \\( \\vec{v}_2 = (4, 2, 5) \\)",
      "right": "Rectas ni paralelas ni perpendiculares",
      "match_id": "m3"
    }
  ],
  "hints": [
    {
      "id": "hint1",
      "content": "Verifica si los vectores son proporcionales para paralelismo"
    },
    {
      "id": "hint2",
      "content": "Calcula el producto escalar para perpendicularidad"
    }
  ]
}
```

::::

::::content

## 🧮 Ejemplo Integrador

Veamos un ejemplo completo: Encontrar todas las ecuaciones de la recta que pasa por \\( P(1, -2, 3) \\) con vector director \\( \\vec{v} = (2, 0, -1) \\)

**Vectorial:**  
$$ (x, y, z) = (1, -2, 3) + t(2, 0, -1) ) $$

**Paramétricas:**  
$$ x = 1 + 2t $$
$$ y = -2 $$
$$ z = 3 - t $$

**Simétricas:** Como \\( b = 0 \\), tenemos:  
$$ y = -2, \\quad \\frac{x - 1}{2} = \\frac{z - 3}{-1} $$

¡Observa cómo adaptamos las ecuaciones cuando una componente es cero! 🎯  
::::

::::question_order

```json
{
  "id": "q6_orden",
  "weight": 1.5,
  "type": "order",
  "statement": "Ordena los pasos para encontrar las ecuaciones simétricas de la recta que pasa por \\( (2, 1, -3) \\) con vector director \\( (4, 2, 6) \\)",
  "items": [
    {
      "id": "step1",
      "content": "Identificar punto y vector: \\( P(2, 1, -3) \\), \\( \\vec{v} = (4, 2, 6) \\)"
    },
    {
      "id": "step2",
      "content": "Verificar que todas las componentes del vector son diferentes de cero"
    },
    {
      "id": "step3",
      "content": "Aplicar la fórmula: \\( \\\\frac{x-2}{4} = \\\\frac{y-1}{2} = \\\\frac{z+3}{6} \\)"
    },
    {
      "id": "step4",
      "content": "Simplificar si es posible: \\( \\\\frac{x-2}{2} = \\\\frac{y-1}{1} = \\\\frac{z+3}{3} \\)"
    }
  ],
  "correct_order": ["step1", "step2", "step3", "step4"],
  "hints": [
    {
      "id": "hint1",
      "content": "Siempre comienza identificando los datos conocidos"
    },
    {
      "id": "hint2",
      "content": "Las ecuaciones simétricas requieren que ningún denominador sea cero"
    }
  ]
}
```

::::

::::summary

## 🎉 ¡Logro Alcanzado!

¡Felicidades! 🚀 Has dominado las diferentes formas de representar rectas en el espacio tridimensional. Ahora puedes:

- ✅ Escribir ecuaciones vectoriales, paramétricas y simétricas
- ✅ Identificar cuándo una recta está en un plano vertical
- ✅ Encontrar interceptos con los planos coordenados
- ✅ Determinar si rectas son paralelas o perpendiculares

Recuerda que cada forma tiene su utilidad específica y saber convertir entre ellas es clave. ¡Sigue practicando y pronto serás un experto en geometría analítica! 💪

_"Las matemáticas son el lenguaje con el que Dios ha escrito el universo." - Galileo Galilei_ 🌌  
::::
