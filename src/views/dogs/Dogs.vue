<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template #cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script src="./script.js" />
