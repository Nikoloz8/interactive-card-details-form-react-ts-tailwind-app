import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import CardholderName from './components/CardholderName'
import CardNumber from './components/CardNumber'
import CardDate from './components/CardDate'
import CardCVC from './components/CardCVC'
import CardConfirmButton from './components/CardConfirmButton'
import CardAfterConfirmation from './components/CardAfterConfirmation'
import CardLogics from './components/CardLogics'
import CardStyles from './components/CardStyles'


function App() {
  const { form, errors, confirm, setError, setform, setConfirm, handleSubmit, handleInputChange } = CardLogics()
  const { textPreset1, inputStyle, textPreset2, textPreset3, textPreset4, onError } = CardStyles()

  return (
    <>
      <div className="bg-[#21092F] max-lg:w-[100%]! max-lg:h-[40%]! w-[30%] top-0 absolute h-[100%] bg-[url('/images/bg-main-desktop.png')] max-md:bg-[url('/images/bg-main-mobile.png')]] bg-no-repeat bg-center bg-cover z-[-1]">
      </div>
      <div className='flex items-center justify-center h-[100vh] w-[100%]'>
        <div className='max-lg:flex-col max-lg:p-0! flex items-center justify-around pl-[5%] h-[100vh] w-[1440px]'>
          <div className='flex flex-col gap-[30px] max-lg:pt-[40px]'>
            
            <CardFront form={form} textPreset1={textPreset1} textPreset4={textPreset4} />
            <CardBack textPreset1={textPreset1} form={form} />

          </div>
          <form action="" className={`${!confirm ? "flex" : "hidden!"} max-sm:gap-[20px]! max-sm:p-[24px] max-sm:w-[100%]! max-lg:pb-[40px] w-[400px] flex-col gap-[40px]!`}>

            <CardholderName textPreset2={textPreset2} form={form} errors={errors} handleInputChange={handleInputChange} inputStyle={inputStyle} onError={onError} />

            <CardNumber textPreset2={textPreset2} form={form} errors={errors} inputStyle={inputStyle} onError={onError} setError={setError} setform={setform} />

            <div className='flex gap-[20px] max-sm:gap-[8px]'>

              <CardDate textPreset2={textPreset2} errors={errors} inputStyle={inputStyle} form={form} handleInputChange={handleInputChange} onError={onError} />

              <CardCVC textPreset2={textPreset2} errors={errors} form={form} setform={setform} setError={setError} inputStyle={inputStyle} onError={onError} />
            </div>

            <CardConfirmButton textPreset3={textPreset3} handleSubmit={handleSubmit} />

          </form>

          <CardAfterConfirmation textPreset3={textPreset3} textPreset4={textPreset4} confirm={confirm} setConfirm={setConfirm} />

        </div >
      </div >
    </>
  )
}

export default App
