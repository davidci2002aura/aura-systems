# Hostinger Email Signatur Setup - AURA

Schritt-für-Schritt Anleitung zum Einrichten der AURA Email-Signatur in Hostinger.

## 📧 Option 1: Hostinger Webmail (empfohlen)

### Schritt 1: Webmail öffnen
1. Gehe zu [https://webmail.hostinger.com](https://webmail.hostinger.com)
2. Oder: Hostinger hPanel → E-Mail → Webmail öffnen
3. Login mit: `david.lamberts@aurasystems.ltd`

### Schritt 2: Signatur einrichten
1. Im Webmail oben rechts → **Einstellungen** (Zahnrad-Symbol)
2. Links → **Identitäten**
3. Deine Email-Adresse auswählen
4. Runter scrollen zu **Signatur**
5. HTML aktivieren (Checkbox "HTML-Signatur verwenden")
6. HTML-Code einfügen (siehe unten)

### Schritt 3: Logo hochladen
**Option A: Logo direkt hochladen** (empfohlen)
1. Zuerst das Logo als PNG hochladen auf deiner Website:
   - Via FTP zu: `/public_html/email-assets/`
   - Datei: `aura-logo.png` (240x240px)
   - URL dann: `https://aura-systems.de/email-assets/aura-logo.png`

**Option B: Base64 einbetten** (kein Upload nötig)
- Logo wird direkt im HTML-Code eingebettet
- Siehe "HTML-Code mit Base64" unten

---

## 🔧 HTML-Code für Hostinger Webmail

### Variante 1: Mit Logo-Link (nach Upload auf Website)

```html
<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; color: #333; font-size: 13px; line-height: 1.6;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top;">
      <img src="https://aura-systems.de/email-assets/aura-logo.png" alt="AURA Logo" width="80" height="80" style="display: block; border: 0;">
    </td>
    <td style="vertical-align: top;">
      <div style="font-size: 16px; font-weight: 700; color: #000; margin-bottom: 4px;">David Lamberts</div>
      <div style="font-size: 13px; color: #0077ff; font-weight: 500; margin-bottom: 8px;">Inhaber & Neural Architect</div>
      <div style="border-bottom: 2px solid #0077ff; margin: 8px 0; width: 100%;"></div>
      <div style="font-size: 14px; font-weight: 600; color: #000; margin-bottom: 8px; letter-spacing: 0.5px;">AURA NEURAL ARCHITECTURE</div>
      <div style="font-size: 12px; color: #666;">
        Am Bergle 28 | 88284 Schlier<br>
        Tel: <a href="tel:+4917691336194" style="color: #0077ff; text-decoration: none;">+49 176 9133 6194</a><br>
        E-Mail: <a href="mailto:david.lamberts@aurasystems.ltd" style="color: #0077ff; text-decoration: none;">david.lamberts@aurasystems.ltd</a><br>
        Web: <a href="https://aura-systems.de" target="_blank" style="color: #0077ff; text-decoration: none;">aura-systems.de</a>
      </div>
    </td>
  </tr>
</table>
```

### Variante 2: Minimalistisch (einzeilig)

```html
<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 12px;">
  <tr>
    <td style="padding-right: 15px; vertical-align: middle;">
      <img src="https://aura-systems.de/email-assets/aura-logo.png" alt="AURA" width="50" height="50" style="display: block; border: 0;">
    </td>
    <td style="vertical-align: middle;">
      <strong style="color: #000;">David Lamberts</strong> |
      <span style="color: #0077ff; font-weight: 600;">AURA NEURAL ARCHITECTURE</span><br>
      <a href="tel:+4917691336194" style="color: #0077ff; text-decoration: none;">+49 176 9133 6194</a> |
      <a href="mailto:david.lamberts@aurasystems.ltd" style="color: #0077ff; text-decoration: none;">david.lamberts@aurasystems.ltd</a> |
      <a href="https://aura-systems.de" style="color: #0077ff; text-decoration: none;">aura-systems.de</a>
    </td>
  </tr>
</table>
```

---

## 📧 Option 2: Email-Client (Gmail, Outlook, Apple Mail)

Wenn du Hostinger-Email mit einem Email-Client verwendest:

### Gmail
1. Gmail → Einstellungen → "Alle Einstellungen aufrufen"
2. Reiter "Allgemein" → "Signatur"
3. "+ Neu erstellen"
4. HTML-Code einfügen
5. Logo hochladen oder verlinken

### Outlook (Desktop)
1. Datei → Optionen → E-Mail → Signaturen
2. "Neu" klicken
3. Formatierung verwenden (Tabelle einfügen)
4. Logo als Bild einfügen (PNG-Version)
5. Text formatieren
6. Speichern

### Apple Mail
1. Mail → Einstellungen → Signaturen
2. Account auswählen → "+" für neue Signatur
3. HTML einfügen oder manuell gestalten
4. Logo per Drag & Drop hinzufügen

---

## 📤 Logo auf deine Website hochladen (FTP)

### Schritt 1: PNG erstellen
1. Öffne [CloudConvert](https://cloudconvert.com/svg-to-png)
2. Lade `email-icon-compact.svg` hoch
3. Größe: 240x240px
4. Exportiere als PNG → `aura-logo.png`

### Schritt 2: Via Hostinger File Manager hochladen
1. Hostinger hPanel → **Dateien** → **Dateimanager**
2. Navigiere zu: `public_html/`
3. Erstelle neuen Ordner: `email-assets`
4. Öffne `email-assets/`
5. **Hochladen** → `aura-logo.png` auswählen
6. Fertig! Logo ist nun erreichbar unter:
   ```
   https://aura-systems.de/email-assets/aura-logo.png
   ```

### Schritt 3: Via FTP hochladen (Alternative)
```
FTP-Host: ftp.aura-systems.de (oder aus Hostinger hPanel)
Benutzername: [Dein FTP-User]
Passwort: [Dein FTP-Passwort]
Pfad: /public_html/email-assets/
Datei: aura-logo.png
```

---

## 🎯 Schnellstart (5 Minuten)

**Einfachste Methode:**

1. **PNG erstellen:**
   - [CloudConvert öffnen](https://cloudconvert.com/svg-to-png)
   - `email-icon-compact.svg` hochladen
   - 240x240px, PNG exportieren

2. **Logo hochladen:**
   - Hostinger hPanel → Dateimanager
   - Ordner erstellen: `email-assets`
   - PNG hochladen

3. **Signatur einstellen:**
   - [Webmail öffnen](https://webmail.hostinger.com)
   - Einstellungen → Identitäten → Signatur
   - HTML-Code von oben kopieren
   - Logo-URL anpassen: `https://aura-systems.de/email-assets/aura-logo.png`
   - Speichern

**Fertig!** ✅

---

## 🔍 Troubleshooting

### Problem: Logo wird nicht angezeigt
**Lösung:**
- Prüfe URL: `https://aura-systems.de/email-assets/aura-logo.png` im Browser
- Stelle sicher, dass Ordner `email-assets` öffentlich zugänglich ist
- Prüfe Dateiberechtigungen (644 für Datei, 755 für Ordner)

### Problem: Signatur sieht auf Mobile anders aus
**Lösung:**
- Verwende Variante 2 (Minimalistisch) für bessere Mobile-Darstellung
- Reduziere Logo-Größe auf 50-60px

### Problem: HTML funktioniert nicht in Webmail
**Lösung:**
- Stelle sicher, dass "HTML-Signatur verwenden" aktiviert ist
- Verwende Tabellen-Layout statt DIVs (besser für Email-Clients)
- Vermeide CSS-Klassen, nur Inline-Styles

### Problem: Logo ist zu groß (Dateigröße)
**Lösung:**
- Komprimiere PNG mit [TinyPNG](https://tinypng.com)
- Ziel: < 50KB
- Oder verwende Base64-Einbettung (siehe Option B)

---

## 💡 Tipps

✅ **Teste die Signatur** - Sende Testmail an dich selbst
✅ **Prüfe auf verschiedenen Geräten** - Desktop, Mobile, Webmail
✅ **Halte es einfach** - Weniger ist mehr bei Email-Signaturen
✅ **Verwende absolute URLs** - Keine relativen Pfade für Bilder
✅ **Inline-Styles nur** - Keine externen CSS-Dateien in Emails

---

## 📱 Hostinger Email App

Falls du die Hostinger Email App verwendest:

**iOS/Android:**
1. App öffnen
2. Einstellungen → Kontoeinstellungen
3. Signatur
4. Text-Signatur eingeben (HTML oft nicht unterstützt in Apps)
5. Empfehlung: Kurze Text-Version verwenden:

```
David Lamberts
Inhaber & Neural Architect
AURA NEURAL ARCHITECTURE

+49 176 9133 6194
david.lamberts@aurasystems.ltd
aura-systems.de
```

---

## ✉️ Kontakt bei Problemen

Falls du Hilfe brauchst:
- Hostinger Support-Chat: [https://www.hostinger.de/kontakt](https://www.hostinger.de/kontakt)
- Hostinger Tutorials: [https://support.hostinger.com](https://support.hostinger.com)

---

**Version:** 1.0
**Erstellt für:** david.lamberts@aurasystems.ltd
**Datum:** 2026-02-23
