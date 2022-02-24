<template>
  <div class="modalBG">
    <div class="modal">기업 정보가 없습니다.</div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.modalBG {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  z-index: 5;
}

.modal {
  width: 50%;
  height: 40%;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 150px;
}
</style>
