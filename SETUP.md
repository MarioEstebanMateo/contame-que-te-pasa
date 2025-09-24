# Configuración de Desarrollo para "Contame que te pasa"

Este documento te guiará paso a paso para configurar y ejecutar la aplicación.

## ⚡ Configuración Rápida

### 1. Obtén tu API Key de Groq (GRATIS)
1. Ve a [console.groq.com](https://console.groq.com/keys)
2. Crea una cuenta gratuita
3. Genera una nueva API Key
4. Cópiala para el siguiente paso

### 2. Configura las Variables de Entorno
1. Ve a la carpeta `server/`
2. Abre el archivo `.env`
3. Reemplaza `your_groq_api_key_here` con tu API Key real:
   ```env
   GROQ_API_KEY=gsk_tu_api_key_real_aqui
   PORT=3001
   NODE_ENV=development
   ```

### 3. Ejecuta la Aplicación
```bash
# Opción más fácil - ejecuta todo a la vez
npm run dev:full

# O por separado si prefieres:
# Terminal 1:
npm run dev

# Terminal 2:
npm run server
```

### 4. Abre la App
Ve a: http://localhost:5173

## 🎯 ¿Cómo usar la aplicación?

1. **Describe tu problema**: Sé específico y detallado
2. **Selecciona categoría**: Elige la más relevante
3. **Nivel de urgencia**: Ayuda a la IA a priorizar
4. **Obtén solución**: La IA analizará y propondrá soluciones
5. **Implementa**: Sigue los pasos sugeridos

## 💡 Ejemplos de problemas que puedes resolver

- **Trabajo**: "No puedo gestionar mi tiempo efectivamente y llego tarde a las reuniones"
- **Personal**: "Quiero empezar a hacer ejercicio pero no tengo motivación"
- **Técnico**: "Mi computadora va lenta y se congela frecuentemente"
- **Financiero**: "Necesito crear un presupuesto pero no sé por dónde empezar"

## 🛠️ Troubleshooting

### Error: "Groq API: ❌ No configurada"
- Verifica que hayas copiado correctamente tu API Key en `server/.env`
- Asegúrate de que no hay espacios extra

### Error: Puerto 3001 ya está en uso
- Cambia el puerto en `server/.env`: `PORT=3002`
- Actualiza `vite.config.js` con el nuevo puerto

### Error: CORS o conexión de red
- Verifica que el backend esté ejecutándose en el puerto correcto
- Revisa la consola del navegador para más detalles

## 🚀 Próximos Pasos

Una vez que tengas la aplicación funcionando:
1. Prueba con diferentes tipos de problemas
2. Experimenta con las categorías y niveles de urgencia
3. Observa cómo la IA estructura sus respuestas
4. ¡Modifica el código para personalizarla a tus necesidades!

## 📞 Contacto

Si tienes problemas con la configuración:
- Revisa los logs en la consola
- Verifica que todas las dependencias estén instaladas
- Asegúrate de tener Node.js 18+ instalado