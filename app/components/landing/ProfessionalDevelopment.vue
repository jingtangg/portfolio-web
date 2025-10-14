<script setup lang="ts">
defineProps<{
  page: {
    professional_development: {
      title: string
      items: Array<{
        program: string
        institution: string
        date: string
      }>
    }
  }
}>()
</script>

<template>
  <UPageSection
    :title="page.professional_development.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-4">
        <Motion
          v-for="(dev, index) in page.professional_development.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex flex-col gap-1"
        >
          <div class="flex items-center text-nowrap gap-2">
            <p class="text-sm">
              {{ dev.date }}
            </p>
            <USeparator />
            <span class="text-sm font-medium">{{ dev.program }}</span>
          </div>
          <div class="flex justify-end">
            <span class="text-sm">{{ dev.institution }}</span>
          </div>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>