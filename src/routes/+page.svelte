<script>

import { HeroSection,AboutMeSection } from "$components";
const {data} =$props()
$inspect(data)
let {workExperience} = data;
$inspect(workExperience)

</script>


<HeroSection/>
<AboutMeSection {workExperience}/>