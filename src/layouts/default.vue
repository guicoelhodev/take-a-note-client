<template>
  <div class="flex justify-between gap-4">
    <nav class="p-4 border border-red-300 max-w-sm w-full">
      <h3>Navigation</h3>

      <ul>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
        <li>Page 4</li>
      </ul>
    </nav>
    <main class="p-4 border border-red-100 w-full max-w-[1366px]">
      <slot />
    </main>

    <aside class="p-4 border border-red-300 max-w-sm w-full">info</aside>
  </div>
</template>
