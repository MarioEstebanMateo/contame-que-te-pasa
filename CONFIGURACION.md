# 🔑 Configuración de la API Key de Groq

## ✅ Estado Actual

- ✅ Frontend funcionando en: http://localhost:5173
- ⚠️ Backend necesita configuración de API Key

## 📋 Pasos para completar la configuración

### 1. Obtén tu API Key gratuita de Groq

1. Ve a: https://console.groq.com/keys
2. Crea una cuenta gratuita (si no tienes una)
3. Haz clic en "Create API Key"
4. Copia la API Key generada (comienza con `gsk_...`)

### 2. Configura la API Key

1. Abre el archivo: `server/.env`
2. Reemplaza esta línea:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

   Con tu API Key real:

   ```env
   GROQ_API_KEY=gsk_tu_api_key_real_aqui_sin_espacios
   ```

### 3. Reinicia el servidor backend

```bash
# En una nueva terminal:
cd server
npm run start
```

### 4. ¡Listo! 🎉

Una vez configurada la API Key:

- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- API Health: http://localhost:3001/api/health

## 💡 Cómo probar la aplicación

1. Ve a http://localhost:5173
2. Escribe un problema, por ejemplo:

   > "Necesito organizar mejor mi tiempo de trabajo desde casa pero me distraigo constantemente con redes sociales y tareas domésticas"

3. Agrega contexto adicional si es necesario

4. Haz clic en "Buscar solución"
5. ¡La IA analizará tu problema y te dará soluciones estructuradas!

## 🚨 Troubleshooting

### Error: "Groq API: ❌ No configurada"

- Verifica que copiaste la API Key correctamente
- No debe tener espacios al inicio o final
- Debe empezar con `gsk_`

### Error: Puerto en uso

- Si el puerto 3001 está ocupado, cambia el puerto en `server/.env`:
  ```env
  PORT=3002
  ```
- Actualiza también `vite.config.js` línea 8 con el nuevo puerto

### La aplicación no carga

- Verifica que ambos servidores estén funcionando
- Frontend debe mostrar: "Local: http://localhost:5173/"
- Backend debe mostrar: "🚀 Servidor corriendo en http://localhost:3001"

## 🎯 Características implementadas

✅ **Frontend React + Vite**
✅ **Diseño responsivo con Tailwind CSS**
✅ **Modo oscuro con persistencia**
✅ **Formulario estructurado con categorías**
✅ **Animaciones y transiciones suaves**
✅ **Backend Node.js + Express**
✅ **Integración con Groq API**
✅ **Parsing inteligente de respuestas de IA**
✅ **Manejo de errores robusto**
✅ **Rate limiting y seguridad**
✅ **CORS configurado**

## 🚀 ¡Ya tienes tu aplicación de IA lista!

Esta aplicación puede resolver problemas de:

- 💼 Trabajo y productividad
- 👤 Desarrollo personal
- 💻 Problemas técnicos
- 💰 Finanzas personales
- ❤️ Relaciones interpersonales
- 📚 Educación y aprendizaje
- 🏥 Bienestar y salud
- 🌟 Y mucho más...

¡Disfruta resolviendo problemas con inteligencia artificial!
