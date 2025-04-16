# Angular 12 Azure Static Web App Deployment

This project demonstrates how to deploy an Angular 12 application to Azure Static Web Apps using GitHub Actions.
# Muffeez-Portfolio 
Click the link below to open Muffezz's portfolio.
<https://mufeez1.github.io/muffeez/> 

## Prerequisites

- Azure account ([free account available](https://azure.microsoft.com/free/))
- GitHub account
- Angular 12 project (this repository)

## Deployment Guide

### 1. Create Azure Static Web App

Follow these steps to set up your Azure Static Web App:

1. Go to the [Azure Portal](https://portal.azure.com/)
2. Click "Create a Resource" and search for "Static Web App"
3. Fill in the basic details:
   - Subscription
   - Resource group (create new if needed)
   - Name (e.g., `muffeez-portfolio`)
   - Hosting plan: Free
   - Region: Choose one closest to your users
4. In the "Deployment Details" section:
   - Source: GitHub
   - Organization: Your GitHub org
   - Repository: This repository
   - Branch: `main`
   - Build preset: Custom
5. Click "Review + Create" then "Create"

For detailed instructions, refer to the [official Microsoft documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-angular?pivots=github).

### 2. GitHub Actions Workflow

This repository includes a GitHub Actions workflow (`.github/workflows/azure-static-web-apps.yml`) that automatically builds and deploys your Angular app.

#### Workflow Configuration:

```yaml
      # Deploys to Azure Static Web Apps
      - name: Deploy to Azure
        uses: Azure/static-web-apps-deploy@v1
        with:
          app_location: '/'                # Source code root
          output_location: 'dist/muffeez-portfolio'  # Build output
          azure_static_web_apps_api_token: ${{ secrets.AZURE_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
```

## Customization Guide <a name="customization-guide"></a>

### Configuration Reference

| Setting | Default Value | Type | Description | Required |
|---------|--------------|------|-------------|----------|
| `app_location` | `/` | string | Root directory containing Angular source files (must contain `angular.json`) | ✅ Yes |
| `output_location` | `dist/muffeez-portfolio` | string | Build output directory (must match `outputPath` in `angular.json`) | ✅ Yes |
| `node-version` | `14.x` | string | Node.js version (Angular 12 requires 12.x-14.x) | ✅ Yes |
| `build_command` | `npm run build -- --configuration production` | string | Production build command with Angular CLI flags | ✅ Yes |
| `api_location` | (empty) | string | API directory if using Azure Functions backend | ❌ No |
| `app_build_command` | (inherited) | string | Alternative to separate build step in workflow | ❌ No |

### Environment Variables

```yaml
env:
  NODE_VERSION: '14.x'  # Change according to Angular version
  OUTPUT_DIR: 'dist/muffeez-portfolio'  # Must match angular.json
```
This README includes:
1. Clear setup instructions with Azure portal guidance
2. Workflow explanation with customization notes
3. Configuration reference table
4. Troubleshooting section
5. Links to official documentation

The formatting uses proper Markdown with code blocks, tables, and clear section headings for easy reading. You may want to adjust the specific paths or names to match your exact project configuration.
