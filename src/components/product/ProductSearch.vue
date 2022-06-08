<template>
  <div class="search">
    <div class="search__top">
      <div class="search__form">
        <label for="search">Enter search text: </label>
        <input
          type="text"
          name="search"
          id="search"
          v-model="searchText"
          placeholder="Enter the search text, for example: Adania Pant"
          @keyup.enter="handleSubmit"
        />
      </div>
      <div class="search__btns" v-if="searchText">
        <button @click="handleSubmit">Search</button>
        <button class="remove" @click="handleRemove">Clear</button>
      </div>
    </div>
    <div class="search__suggest">
      <span>Suggest: </span>
      <span
        :class="{ active: index === indexSuggest }"
        v-for="(item, index) in suggestList"
        :key="index"
        @click="handleSuggest(item, index)"
      >
        {{ item }}
      </span>
    </div>

    <!-- test -->
    <div class="voiceSearch">
      <button class="buttonBranch" @click="isVoiceSearch = !isVoiceSearch">
        Voice search
      </button>
      <div class="voice" v-if="isVoiceSearch">
        <button class="speech-to-txt" @click="startSpeechToTxt">
          Click to Speak
        </button>
        <p>
          <i>Search for</i>: <strong>{{ transcription_ }}</strong>
        </p>
      </div>
    </div>

    <notifications group="warnSearchInput" width="50%" position="top center" />
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data() {
    return {
      searchText: "",
      suggestList: [
        "Adania Pant",
        "Alia Knit Trouser",
        "Ally Ring",
        "Aqualina Sandal",
        "David Shirt",
      ],
      indexSuggest: "",
      isVoiceSearch: false,
      runtimeTranscription_: "",
      transcription_: "",
      lang_: "es-ES",
    };
  },
  watch: {
    transcription_() {
      this.$emit("updateSearch", this.searchText);
    },
  },
  methods: {
    handleSubmit() {
      if (this.searchText) {
        this.$emit("updateSearch", this.searchText);
      } else {
        this.$notify({
          group: "warnSearchInput",
          title: "You have not entered the search text!",
          text: "Please enter the search text to perform the search",
          type: "warn",
          duration: 3000,
        });
      }
    },
    handleSuggest(item, index) {
      this.searchText = item;
      this.indexSuggest = index;
      this.handleSubmit();
    },
    handleRemove() {
      this.searchText = "";
      this.$emit("updateSearch");
    },

    // test voice search
    startSpeechToTxt() {
      // initialisation of voicereco

      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        // this.transcription_.push(this.runtimeTranscription_);
        this.transcription_ = this.runtimeTranscription_;
        this.searchText = this.runtimeTranscription_;
        this.runtimeTranscription_ = "";
        recognition.stop();
      });
      recognition.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__top {
    display: flex;
    align-items: flex-end;
  }
  label {
    display: block;
    margin-bottom: 2px;
    font-weight: bold;
  }
  &__suggest {
    padding: 4px 0;
    span:first-child {
      color: #ff6348;
      font-weight: bold;
    }
    span:not(:first-child) {
      padding: 3px 6px;
      color: #e55039;
      font-style: italic;
      font-size: 15px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__btns {
    margin-bottom: 1px;
    .remove {
      background: #e74c3c;
    }
  }
  input {
    padding: 5px 12px;
    border-radius: 8px;
    min-width: 390px;
    border: 1px solid #95a5a6;

    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    &:focus {
      outline: none;
      color: #2980b9;
      border: 1px solid;
      font-weight: bold;
    }
  }
  button {
    background: #487eb0;
    padding: 5px 12px;
    border: none;
    margin: 0 0 0 12px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    min-width: 64px;
    &:hover {
      opacity: 0.85;
      background: #00a8ff;
    }
  }
  .voiceSearch {
    padding: 12px 0;
  }
  .voice {
    p {
      margin: 0;
    }
    display: flex;
    gap: 0 20px;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    border-radius: 5px;
    button {
      background: #95a5a6;
    }
  }
  .active {
    background: #8c7ae6;
    color: #fff !important;
    border-radius: 5px;
  }
}
</style>