# MathInfo.org

npm run deploy - deploys main branch to website
yarn start - locally run main branch

TODO:
- ADD HAMBURGER MENU BUTTON ON WIDTH < 496
- ADD LIGHT/DARK MODE
- ADD 200% TEXT OPTION
- find/manage consistent color scheme
- add interactive activity using inverse trigonometry to find unknown angle
- be compliant to WCAG 2.2 AAA

WCAG 2.2 checklist (supplied from https://www.wuhcag.com/wcag-checklist/):

A:
- [ ] 1.1.1	Non-text Content	Provide text alternatives for non-text content that serves the same purpose.
- [x] 1.2.1	Audio-only and Video-only (Pre-recorded)	Provide an alternative to video-only and audio-only content.
- [x] 1.2.2	Captions (Pre-recorded)	Provide captions for videos with audio.
- [x] 1.2.3	Audio Description or Media Alternative (Pre-recorded)	Provide audio description or text transcript for videos with sound.
- [x] 1.3.1	Info and Relationships	Content, structure and relationships can be programmatically determined.
- [x] 1.3.2	Meaningful Sequence	Present content in a meaningful order.
- [x] 1.3.3	Sensory Characteristics	Instructions don’t rely solely on sensory characteristics.
- [x] 1.4.1	Use of Colour	Don’t use presentation that relies solely on colour.
- [x] 1.4.2	Audio Control	Don’t play audio automatically.
- [x] 2.1.1	Keyboard	All functionality is accessible by keyboard with no specific timings.
- [x] 2.1.2	No Keyboard Trap	Users can navigate to and from all content using a keyboard.
- [x] 2.1.4	Character Key Shortcuts	Allow users to turn off or remap single-key character shortcuts.
- [x] 2.2.1	Timing Adjustable	Provide user controls to turn off, adjust or extend time limits.
- [x] 2.2.2	Pause, Stop, Hide	Provide user controls to pause, stop and hide moving and auto-updating content.
- [x] 2.3.1	Three Flashes or Below Threshold	No content flashes more than three times per second.
- [x] 2.4.1	Bypass Blocks	Provide a way for users to skip repeated blocks of content. (add skip to content button)
- [x] 2.4.2	Page Titled	Use helpful and clear page titles.
- [x] 2.4.3	Focus Order	Components receive focus in a logical sequence.
- [x] 2.4.4	Link Purpose (In Context)	Every link’s purpose is clear from its text or context.
- [x] 2.4.7	Focus Visible	Keyboard focus is visible when used.
- [x] 2.4.3	Page Break Navigation	Provide a way to navigate between page break locators.
- [x] 2.5.1	Pointer Gestures	Multi-point and path-based gestures can be operated with a single pointer.
- [x] 2.5.2	Pointer Cancellation	Functions don’t complete on the down-click of a pointer.
- [ ] 2.5.3	Label in Name	Where a component has a text label, the name of the component also contains the text displayed.
- [x] 2.5.4	Motion Actuation	Functions operated by motion can also be operated through an interface and responding to motion can be disabled.
- [ ] 3.1.1	Language of Page	Each webpage has a default human language assigned.
- [x] 3.2.1	On Focus	Elements do not change when they receive focus.
- [x] 3.2.2	On Input	Elements do not change when they receive input.
- [ ] 3.2.6	Consistent Help	Help options are presented in the same order.
- [x] 3.3.1	Error Identification	identify and describe input errors for users.
- [ ] 3.3.2	Labels or Instructions	Provide labels or instructions for user input.
- [x] 3.3.7	Redundant Entry	Auto-fill or provide information that’s required more than once in the same process.
- [x] 4.1.1	Parsing	No major code errors
- [ ] 4.1.2	Name, Role, Value	The name and role of user components can be understood by technology.

AA:
- [x] 1.2.4 – Captions (Live)	Add captions to live videos.
- [x] 1.2.5 – Audio Description (Pre-recorded)	Provide audio descriptions for pre-recorded videos.
- [ ] 1.3.4 – Orientation	Your website adapts to portrait and landscape views.
- [ ] 1.3.5 – Identify Input Purpose	The purpose of input fields must be programmatically determinable.
- [x] 1.4.3 – Contrast (Minimum)	Contrast ratio between text and background is at least 4.5:1.
- [ ] 1.4.4 – Resize Text	Text can be resized to 200% without loss of content or function.
- [x] 1.4.5 – Images of Text	Don’t use images of text.
- [ ] 1.4.10 – Reflow	Content retains meaning and function without scrolling in two dimensions.
- [x] 1.4.11 – Non-Text Contrast	The contrast between user interface components, graphics and adjacent colours is at least 3:1.
- [ ] 1.4.12 – Text Spacing	Content and function retain meaning when users change elements of text spacing.
- [x] 1.4.13 – Content on Hover or Focus	When hover or focus triggers content to appear, it is dismissible, hoverable and persistent.
- [x] 2.4.5 – Multiple Ways	Offer at least two ways to find pages on your website.
- [ ] 2.4.6 – Headings and Labels	Headings and labels describe topic or purpose.
- [x] 2.4.11 – Focus Appearance (Minimum)	Focus indicators are clearly distinguishable when active.
- [x] 2.5.7 – Dragging Movements	Functionality that uses dragging movements can be achieved with a single pointer without dragging.
- [x] 2.5.8 – Target Size (Minimum)	The target size for pointer inputs is at least 24 by 24 CSS pixels.
- [ ] 3.1.2 – Language of Parts	Each part of a webpage has a default human language assigned.
- [ ] 3.2.3 – Consistent Navigation	Position menus and standard controls consistently.
- [ ] 3.2.4 – Consistent Identification	Identify components with the same function consistently.
- [ ] 3.2.7 – Visible Controls	Give users a way to identify controls without mouse hover or keyboard focus.
- [x] 3.3.3 – Error Suggestion	Suggest corrections when users make mistakes.
- [x] 3.3.4- Error Prevention (Legal, Financial, Data)	Check, confirm and allow reversal of pages that cause important commitments.
- [x] 3.3.8 – Accessible Authentication	Don’t authenticate users through memory, transcription or cognitive tests without alternatives.
- [x] 4.1.3 – Status Messages	Alert users to changes in content that aren’t given focus.

AAA:
- [x] 1.2.6 – Sign Language (Pre-recorded)	Provide sign language translations for pre-recorded videos.
- [x] 1.2.7 – Extended Audio description (Pre-recorded)	Provide extended audio descriptions for pre-recorded videos.
- [x] 1.2.8 – Media Alternative (Pre-recorded)	Provide text alternatives for pre-recorded videos.
- [x] 1.2.9 – Audio Only (Live)	Provide alternatives for live audio.
- [ ] 1.3.6 – Identify Purpose	The purpose of all components must be programmatically determinable.
- [x] 1.4.6 – Contrast (Enhanced)	Contrast ratio between text and background is at least 7:1.
- [x] 1.4.7 – Low or No Background Audio	Audio-only content is clear with no or minimal background noise.
- [ ] 1.4.8 – Visual Presentation	Offer users a range of presentation options for blocks of text.
- [x] 1.4.9 – Images of Text (No Exception)	Don’t use images of text.
- [ ] 2.1.3 – Keyboard (No Exception)	All functionality is accessible by keyboard with no exceptions.
- [x] 2.2.3 – No Timing	No time limits on your website.
- [x] 2.2.4 – Interruptions	Users can postpone or supress non-emergency interruptions.
- [x] 2.2.5 – Re-authenticating	Save user data when re-authenticating.
- [x] 2.2.6 – Timeouts	Warn users about timeouts that cause data loss.
- [x] 2.3.2 – Three Flashes	No content flashes more than three times per second.
- [x] 2.3.3 – Animation from Interactions	Users can disable motion animation.
- [ ] 2.4.8 – Location	Let users know where they are on your website. (add Home > Section > Article to each page)
- [x] 2.4.9 – Link Purpose (Link Only)	Every link’s purpose is clear from its text.
- [x] 2.4.10 – Section Headings	Organise content with headings.
- [ ] 2.4.12 – Focus Appearance (Enhanced)	Focus indicators are more clearly distinguishable when active.
- [ ] 2.5.5 – Target Size	The target size for pointer inputs is at least 44 by 44 CSS pixels.
- [ ] 2.5.6 – Concurrent Input Mechanisms	No restrictions on modes of input.
- [x] 3.1.3 – Unusual Words	Define any unusual words or phrases.
- [ ] 3.1.4 – Abbreviations	Define any abbreviations.
- [x] 3.1.5 – Reading Level	Users with nine years of schooling can read your content.
- [x] 3.1.6 – Pronunciation	Define words where meaning is ambiguous without pronunciation. 
- [x] 3.2.5 – Change on Request	Elements do not change without a request.
- [ ] 3.3.5 – Help	Provide help to users.
- [x] 3.3.6 – Error Prevention (All)	Check, confirm and allow reversal of pages that require users to submit information.
- [x] 3.3.9 – Accessible Authentication (Enhanced)	Don’t authenticate users through memory, transcription or cognitive tests.