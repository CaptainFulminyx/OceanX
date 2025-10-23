<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  open: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const route = useRoute()
const isActive = (path) => computed(() => route.path === path)
</script>

<template>
  <aside class="sidebar" :class="{ open: open }" aria-label="Sidebar">
    <div class="sidebar-inner">
      <div class="logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M2 12c3-1.5 4.5-2 7-2s3.5.5 7 2 4 2 6 2" stroke="white" stroke-opacity=".85" stroke-width="2" stroke-linecap="round"/>
          <path d="M2 16c3-1.5 4.5-2 7-2s3.5.5 7 2 4 2 6 2" stroke="white" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Oceanography</span>
      </div>

      <nav class="nav" @click="$emit('close')">
        <RouterLink class="link" :class="{ active: isActive('/underwater-geography').value }" to="/underwater-geography">
          <span class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 12c3-1.5 4.5-2 7-2s3.5.5 7 2 4 2 6 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
          <span>Underwater Geography</span>
        </RouterLink>
        <RouterLink class="link" :class="{ active: isActive('/ecosystem').value }" to="/ecosystem">
          <span class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v6m0 0 3-3m-3 3-3-3M4 13a8 8 0 1 0 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
          <span>Ecosystem</span>
        </RouterLink>
        <RouterLink class="link" :class="{ active: isActive('/biosphere').value }" to="/biosphere">
          <span class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" stroke-width="2"/></svg>
          </span>
          <span>Biosphere</span>
        </RouterLink>
        <RouterLink class="link" :class="{ active: isActive('/sea-exploration-history').value }" to="/sea-exploration-history">
          <span class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v4m0 12v4m0-16 6 4-6 4-6-4 6-4ZM4 14c3-1.5 4.5-2 7-2s3.5.5 7 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
          <span>Sea Exploration History</span>
        </RouterLink>
        <RouterLink class="link" :class="{ active: isActive('/socio-economics').value }" to="/socio-economics">
          <span class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 18v-3a2 2 0 0 1 2-2h2m3 5v-4a3 3 0 0 1 3-3h2m3 7v-2a4 4 0 0 0-4-4h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="7" r="2" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="6" r="2" stroke="currentColor" stroke-width="2"/></svg>
          </span>
          <span>Economic & Cultural Dependency</span>
        </RouterLink>
      </nav>
    </div>

    <!-- Mobile scrim -->
    <button v-if="open" class="scrim" aria-label="Close menu" @click="emit('close')" />
  </aside>
</template>

<style scoped>
.sidebar {
  position: relative;
  background: linear-gradient(180deg, rgba(5, 31, 64, 0.95), rgba(3, 24, 48, 0.98));
  color: var(--text-primary);
  border-right: 1px solid rgba(255,255,255,0.06);
}

.sidebar-inner {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 100vh;
  padding: 16px 14px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  letter-spacing: .3px;
  padding: 6px 8px;
}

.nav {
  display: grid;
  gap: 6px;
  margin-top: 6px;
}

.link {
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid transparent;
}

.link:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.12);
}

.link.active {
  background: linear-gradient(180deg, rgba(33, 150, 243, 0.15), rgba(33, 150, 243, 0.08));
  border-color: rgba(33, 150, 243, 0.35);
}

.icon {
  display: inline-flex;
  color: #94d2ff;
}

/* Mobile behavior */
@media (max-width: 980px) {
  .sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    width: 80dvw;
    max-width: 320px;
    transform: translateX(-100%);
    transition: transform .22s ease;
    z-index: 30;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .scrim {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .45);
    border: 0;
    margin: 0;
    padding: 0;
    z-index: 20;
  }
}
</style>
