<template>
  <div class="share">
      <div class="row">
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="facebook"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fab fa-facebook-f"></i> <span>Facebook</span></ShareNetwork>
    </div>
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="twitter"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fab fa-twitter"></i> <span>Twitter</span></ShareNetwork>
    </div>
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="linkedin"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fab fa-linkedin-in"></i> <span>Linkedin</span></ShareNetwork>
    </div>
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="telegram"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fab fa-telegram-plane"></i> <span>Telegram</span></ShareNetwork>
    </div>
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="whatsapp"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fab fa-whatsapp"></i> <span>Whatsapp</span></ShareNetwork>
    </div>
    <div class="col-md-4 px-2 mb-3">
        <ShareNetwork tag="button" class="btn btn-compartilha w-100"
    network="email"
    :url="url"
    :title="titulo"
    :description="desc"
    :quote="res"
    :hashtags="hashtag"
  ><i class="fas fa-envelope"></i> <span>E-mail</span></ShareNetwork>
    </div>
</div>
  </div>
</template>

<script>
export default {
    props:{
        url:'',
        titulo:'',
        desc:'',
        res:'',
        hashtag:''
    }
}
</script>

<style lang="scss" scoped>
    .btn-compartilha{
        font-size: 22px;
        span{
            font-size: 16px;
            vertical-align: middle;
            margin-left: 5px;
        }
    }
</style>