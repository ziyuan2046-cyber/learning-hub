# Polyphonic pronunciation lookup

This optional static lookup only augments the existing 520 polyphonic-character flags. Original textbook characters, flags, primary pronunciations, counts and stroke data are unchanged. The app keeps the textbook pronunciation first and marks it 本册.

Primary modern readings: pinyin-pro 3.29.5, https://github.com/zh-lx/pinyin-pro . MIT license in pinyin-pro-MIT.txt.
Additional dictionary readings: mozillazg/pinyin-data, pinyin.txt blob 3a3fd4dd1df3004e15c488c657afdf4aa9b9d890, https://github.com/mozillazg/pinyin-data . MIT license in pinyin-data-MIT.txt. Unicode Unihan 16.0.0 kTraditionalVariant was used to cross-check simplified/traditional variants, not to change textbook characters.

Three cases checked separately: 奢 shá (surname), 汉典 https://www.zdic.net/hans/奢 ; 陌 bǎi (historical money-counting usage), 汉典 https://www.zdic.net/hans/陌 ; 欠 qian (neutral-tone usage, as in 哈欠), Unihan 16.0.0 kHanyuPinlu. The UI annotates these readings rather than implying that they are the textbook pronunciation.

The complete data-generation and audit records are saved in the task's local output folder. No pinyin library or third-party dictionary request is needed at runtime. There is no pronunciation audio feature: the chips list pinyin only.
