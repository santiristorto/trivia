## Nota

Este README contiene los detalles técnicos de la aplicación.

Para instrucciones de uso, ver el README principal:
../README.md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Integración Digispark

Cuando el usuario responde correctamente:

- React envía comando VERDE
- Digispark enciende LEDs verdes

Cuando el usuario responde incorrectamente:

- React envía comando ROJO
- Digispark enciende LEDs rojos

Al pasar a la siguiente pregunta:

- React envía comando OFF
- Digispark apaga todos los LEDs

# Circuito KiCad
Descripción del circuito

El circuito utiliza un microcontrolador ATTiny85, representado en el esquemático por ser el componente principal del módulo Digispark.

La alimentación del sistema se realiza mediante el puerto USB integrado del Digispark, el cual proporciona 5V al microcontrolador y al circuito de LEDs.

Los pines utilizados son:

PB0 → LED Verde 1 y 2
PB1 → LED Rojo 1 y 2