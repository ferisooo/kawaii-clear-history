@echo off
setlocal enableextensions

rem ============================================================
rem  update.bat
rem  Force-syncs the folder this script lives in to the latest
rem  "main" branch from GitHub, overwriting ALL local changes.
rem
rem  If no git repo exists here yet (.git missing), it bootstraps
rem  one: git init, wire up the remote, then force-pull main.
rem ============================================================

set "REPO_URL=https://github.com/ferisooo/kawaii-clear-history.git"
set "BRANCH=main"

rem Work from the directory the script is in, no matter where it's run from.
cd /d "%~dp0"

rem Make sure git is actually available before doing anything.
where git >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git is not installed or not on your PATH.
    echo         Install it from https://git-scm.com/download/win and try again.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo  Updating folder:
echo    %CD%
echo  From: %REPO_URL%  ^(branch: %BRANCH%^)
echo.
echo  WARNING: this will OVERWRITE all local changes here.
echo ============================================================
echo.

rem Bootstrap a repo if one isn't here yet.
if not exist ".git" (
    echo [INFO] No .git folder found - bootstrapping a fresh repo...
    git init || goto :fail
    git remote add origin "%REPO_URL%" || goto :fail
) else (
    rem Repo exists: make sure the remote points where we expect.
    git remote get-url origin >nul 2>nul
    if errorlevel 1 (
        git remote add origin "%REPO_URL%" || goto :fail
    ) else (
        git remote set-url origin "%REPO_URL%" || goto :fail
    )
)

echo [INFO] Fetching %BRANCH%...
git fetch origin "%BRANCH%" || goto :fail

echo [INFO] Resetting working tree to origin/%BRANCH% ^(overwriting everything^)...
git checkout -B "%BRANCH%" || goto :fail
git reset --hard "origin/%BRANCH%" || goto :fail

echo [INFO] Removing untracked files and folders...
git clean -fdx

echo.
echo [DONE] This folder now matches origin/%BRANCH%.
echo.
pause
exit /b 0

:fail
echo.
echo [ERROR] Update failed. See the messages above.
echo.
pause
exit /b 1
