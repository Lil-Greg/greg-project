// Shared condition interface
interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

// Air quality info
interface AirQuality {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  "us-epa-index": number;
  "gb-defra-index": number;
}

// Current weather
interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQuality;
}

// Location info
interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

// Hourly forecast
interface HourForecast {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

// Astro info
interface AstroData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

// Day forecast
interface DayForecast {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
  uv: number;
}

// Forecast per day
interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayForecast;
  astro: AstroData;
  hour: HourForecast[];
}

// Forecast root
interface Forecast {
  forecastday: ForecastDay[];
}

// Weather alert
interface WeatherAlert {
  headline: string;
  msgtype: string | null;
  severity: string | null;
  urgency: string | null;
  areas: string | null;
  category: string;
  certainty: string | null;
  event: string;
  note: string | null;
  effective: string;
  expires: string;
  desc: string;
  instruction: string;
}

// Alerts root
interface Alerts {
  alert: WeatherAlert[];
}

export interface WeatherError {
  error: {
    code: number;
    message: string;
  };
}

export interface CurrentWeatherRes {
  current: CurrentWeather;
  location: WeatherLocation;
}

// Root weather data interface
export default interface WeatherData {
  location: WeatherLocation;
  current: CurrentWeather;
  forecast: Forecast;
  alerts?: Alerts;
}