<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" width="100" height="100" />
      <h2>CustomSelect: Vue2</h2>
    </header>

    <XSelect
      style="min-width: 350px"
      :options="options1"
      v-model="value1"
      placeholder="Тип аккаунта"
    />
    <br />

    <XSelect
      style="width: 300px"
      :options="options2"
      v-model="value4"
      autofocus
      placeholder="Выберите пользователя"
    />
    <br />

    <XSelect
      style="min-width: 350px"
      :options="options3"
      v-model="value4"
      placeholder="Tип организации"
    />
    <br />

    <XSelect disabled placeholder="Test" style="width: 300px" />
    <br />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>

    <XSelect
      style="width: 400px"
      :options="options2"
      v-model="value3"
      placeholder="Выберите пользователя"
    />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda, beatae delectus ea eius error est eveniet facilis libero
      molestiae numquam optio quod sapiente sint soluta temporibus voluptate
      voluptates voluptatum.
    </p>
  </div>
</template>

<script>
import XSelect from "@/components/XSelect/XSelect";

export default {
  name: "App",
  components: {
    XSelect,
  },
  data() {
    return {
      value1: 0,
      value2: null,
      value3: 1,
      value4: null,
      options1: [
        { value: 0, label: "Физическое лицо" },
        { value: 1, label: "Организация" },
        { value: 2, label: "Индивидуальный предприниматель" },
      ],
      options2: [
        { value: 0, label: "Физическое лицо" },
        { value: 1, label: "Организация" },
        { value: 2, label: "Индивидуальный предприниматель" },
        { value: 3, label: "OOO" },
        { value: 4, label: "ЗАО" },
        { value: 5, label: "Траст" },
        { value: 7, label: "Юридическое лицо" },
        { value: 8, label: "Компания" },
        { value: 9, label: "Холдинг" },
        { value: 10, label: "ОАО" },
      ],
      options3: [
        { value: 0, label: "Физическое лицо" },
        {
          group: "Caption 3",
          options: [
            { value: 1, label: "Организация" },
            { value: 2, label: "Индивидуальный предприниматель" },
            { value: 3, label: "OOO" },
            { value: 4, label: "ЗАО" },
            { value: 5, label: "Траст" },
            { value: 7, label: "Юридическое лицо" },
          ],
        },
        {
          group: "VPS",
          options: [
            { value: 8, label: "Компания" },
            { value: 9, label: "Холдинг" },
            { value: 10, label: "ОАО" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 40px 10px 0;
}

header {
  text-align: center;
}

.select-button__select {
  font-size: 16px;
  height: 48px;
  border: 1px solid #cccccc;
  outline: 4px solid transparent;
  border-radius: 10px;
  background-color: transparent;
  padding-left: 16px;
  padding-right: 16px;
  font-family: "PT Sans", sans-serif;
}

.select-button__select:focus {
  border-color: #59ce65;
  outline-color: #e7ffe9;
  box-shadow: none !important;
  outline: none !important;
}
</style>
