<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)
const closeSidebar = () => (sidebarOpen.value = false)
const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value)
</script>

<template>
  <div class="app-shell">
    <Sidebar :open="sidebarOpen" @close="closeSidebar" />

    <div class="content">
      <header class="topbar">
        <button class="menu-btn" aria-label="Toggle menu" @click="toggleSidebar">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <h1 class="brand">Oceanography Explorer</h1>
      </header>

      <main class="main">
        <router-view />
      </main>

      <footer class="footer">
        <span>© 2025 Oceanography Explorer</span>
      </footer>
    </div>
  </div>
  
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  background: linear-gradient(180deg, var(--ocean-1), var(--ocean-2));
}

/* Content area */
.content {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-width: 0;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: var(--text-primary);
  background: rgba(6, 34, 56, 0.35);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.brand {
  font-size: 1.1rem;
  letter-spacing: 0.3px;
  margin: 0;
}

.menu-btn {
  display: none;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: var(--text-primary);
  padding: 8px 10px;
  border-radius: 10px;
}

.main {
  padding: 20px;
}

.footer {
  padding: 12px 16px;
  color: var(--text-secondary);
  border-top: 1px solid rgba(255,255,255,0.06);
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
  }
  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
