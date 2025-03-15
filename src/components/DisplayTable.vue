<template>
  <NTable class="display-table">
    <thead>
      <tr>
        <th>Language</th>
        <th>Label</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l of languageOptionList">
        <td>{{ l.label }}</td>
        <td>{{ t('hello', [], { locale: l.value }) }}</td>
        <td>{{ t('s_won', [numberFormat.format(32768)], { locale: l.value }) }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="input-container">
            <span>Value:</span>
            <NInput v-model:value="params.value" placeholder="Enter value" />
          </div>
        </td>
      </tr>
    </tbody>
  </NTable>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { NTable, NInput } from 'naive-ui'
import { useUrlSearchParams } from '@vueuse/core'
import { languageOptionList, numberFormat } from '@/components/i18n.js'

const { t } = useI18n()

const params = useUrlSearchParams('history', {
  initialValue: {
    value: 'engineering-meta',
  },
})
</script>

<style scoped lang="less">
.display-table {
  width: auto;

  .input-container {
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
