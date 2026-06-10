import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  SafeAreaView,
  Modal,
} from 'react-native';
import {
  Car,
  MapPin,
  Star,
  Check,
  Sparkles,
  Shield,
  Clock,
  Phone,
  Calendar,
  X,
} from 'lucide-react-native';

const AREAS = [
  'Rajpur Road',
  'Jakhan',
  'Dalanwala',
  'Vasant Vihar',
  'Clock Tower',
  'GMS Road',
  'Pacific Mall Area',
];

const PACKAGES = [
  {
    id: 'eco',
    name: 'Eco Wash',
    price: '₹299',
    time: '30-40 mins',
    description: 'Perfect for regular maintenance wash',
    features: ['Foam wash exterior', 'Basic interior vacuuming', 'Tire cleaning', 'Glass wipe'],
    isPopular: false,
  },
  {
    id: 'himalayan',
    name: 'Himalayan Shine',
    price: '₹599',
    time: '60-70 mins',
    description: 'Deep interior & exterior cleaning spa',
    features: ['Premium foam wash', 'Deep interior vacuuming', 'Dashboard polish & sanitization', 'Tire dressing & glaze', 'Underbody spray'],
    isPopular: true,
  },
  {
    id: 'detailing',
    name: 'Mussoorie Special',
    price: '₹1,199',
    time: '2-3 hours',
    description: 'Showroom finish detailing & protection',
    features: ['Himalayan shine + Paint claying', 'Premium carnauba wax coating', 'Engine bay dressing', 'Fabric/Leather conditioning', 'AC vent sanitization'],
    isPopular: false,
  },
];

const REVIEWS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Dalanwala',
    rating: 5,
    comment: 'Best doorstep detailing service in Dehradun. The team arrived on time at my house in Dalanwala and left my Fortuner looking like it just rolled out of the showroom!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    location: 'Rajpur Road',
    rating: 5,
    comment: 'Super convenient! Booking a Himalayan Shine wash was incredibly easy. Professional crew and high quality water-saving techniques. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
  },
];

export function DehradunWashScreen() {
  const [selectedPackage, setSelectedPackage] = useState('himalayan');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState(AREAS[0]);
  const [carModel, setCarModel] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {
    if (!name || !phone || !carModel) {
      Alert.alert('Incomplete details', 'Please fill in all details to schedule your wash.');
      return;
    }
    setBookingSuccess(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setCarModel('');
    setBookingSuccess(false);
  };

  return (
    <SafeAreaView className="flex-grow bg-[#F0F9FF]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* HERO SECTION */}
        <View className="bg-[#0284C7] px-6 pt-8 pb-12 rounded-b-[32px] shadow-lg relative overflow-hidden">
          {/* Subtle background glow */}
          <View className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8] opacity-30 rounded-full filter blur-3xl" />
          
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center space-x-2">
              <Sparkles size={24} color="#FFFFFF" />
              <Text className="text-xl font-bold text-white tracking-wider ml-1">DEHRADUN CAR SPA</Text>
            </View>
            <View className="bg-white/20 px-3 py-1.5 rounded-full flex-row items-center">
              <Star size={14} color="#F97316" fill="#F97316" />
              <Text className="text-white text-xs font-semibold ml-1">4.9 (120+ Reviews)</Text>
            </View>
          </View>

          <Text className="text-3xl font-extrabold text-white leading-tight mb-3">
            Foothills' Premium{'\n'}Doorstep Car Detailing
          </Text>
          
          <Text className="text-sky-100 text-sm mb-6 leading-relaxed">
            Bringing professional car spa treatment directly to your doorstep anywhere in Dehradun. Standardized quality, eco-friendly water usage, and professional detailing.
          </Text>

          <View className="flex-row space-x-4 mb-4">
            <View className="flex-1 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-xl flex-row items-center">
              <Shield size={18} color="#38BDF8" />
              <Text className="text-white text-xs font-medium ml-2">100% Insured</Text>
            </View>
            <View className="flex-1 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-xl flex-row items-center">
              <Clock size={18} color="#38BDF8" />
              <Text className="text-white text-xs font-medium ml-2">Flexible Slots</Text>
            </View>
          </View>
        </View>

        {/* METRIC RIBBON */}
        <View className="flex-row justify-around bg-white mx-6 -mt-6 p-4 rounded-2xl shadow-md border border-sky-100">
          <View className="items-center">
            <Text className="text-lg font-bold text-[#0C4A6E]">1,200+</Text>
            <Text className="text-[10px] text-gray-500 font-medium">Cars Cleaned</Text>
          </View>
          <View className="w-[1px] bg-gray-200" />
          <View className="items-center">
            <Text className="text-lg font-bold text-[#0C4A6E]">100%</Text>
            <Text className="text-[10px] text-gray-500 font-medium">Water Recycled</Text>
          </View>
          <View className="w-[1px] bg-gray-200" />
          <View className="items-center">
            <Text className="text-lg font-bold text-[#0C4A6E]">45 Min</Text>
            <Text className="text-[10px] text-gray-500 font-medium">Avg Wash Time</Text>
          </View>
        </View>

        {/* SERVICES SECTION */}
        <View className="px-6 mt-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider">Select Package</Text>
              <Text className="text-xl font-extrabold text-[#0C4A6E]">Our Signature Spas</Text>
            </View>
          </View>

          {PACKAGES.map((pkg) => (
            <TouchableOpacity
              key={pkg.id}
              activeOpacity={0.9}
              onPress={() => setSelectedPackage(pkg.id)}
              className={`mb-4 rounded-2xl p-5 border ${
                selectedPackage === pkg.id
                  ? 'bg-white border-[#0EA5E9] shadow-lg shadow-sky-100'
                  : 'bg-white/80 border-gray-100'
              } relative`}
            >
              {pkg.isPopular && (
                <View className="absolute -top-3 right-5 bg-[#F97316] px-3 py-1 rounded-full">
                  <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Most Popular</Text>
                </View>
              )}

              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-lg font-bold text-[#0C4A6E]">{pkg.name}</Text>
                  <Text className="text-xs text-gray-500 mt-0.5">{pkg.description}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-xl font-extrabold text-[#0EA5E9]">{pkg.price}</Text>
                  <Text className="text-[10px] text-gray-400 font-medium">{pkg.time}</Text>
                </View>
              </View>

              <View className="h-[1px] bg-sky-50/50 my-3" />

              <View className="space-y-1.5">
                {pkg.features.map((feat, idx) => (
                  <View key={idx} className="flex-row items-center">
                    <Check size={14} color="#0EA5E9" strokeWidth={2.5} />
                    <Text className="text-xs text-gray-600 ml-2">{feat}</Text>
                  </View>
                ))}
              </View>

              {/* Radio Indicator */}
              <View className="mt-4 flex-row justify-end">
                <View className={`w-5 h-5 rounded-full border items-center justify-center ${
                  selectedPackage === pkg.id ? 'border-[#0EA5E9]' : 'border-gray-300'
                }`}>
                  {selectedPackage === pkg.id && (
                    <View className="w-3 h-3 rounded-full bg-[#0EA5E9]" />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* LOCAL AREAS BAR */}
        <View className="mt-6 px-6">
          <Text className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2">Coverage Areas</Text>
          <Text className="text-lg font-extrabold text-[#0C4A6E] mb-3">Serving Dehradun Premium Hubs</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {AREAS.map((area) => (
              <View
                key={area}
                className="bg-white border border-sky-100 rounded-full px-4 py-2 mr-2 flex-row items-center shadow-sm"
              >
                <MapPin size={12} color="#0EA5E9" />
                <Text className="text-xs text-gray-700 ml-1.5 font-medium">{area}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* BOOKING INTERACTION FORM */}
        <View className="mx-6 mt-8 bg-white border border-sky-100 p-6 rounded-2xl shadow-md">
          <Text className="text-lg font-bold text-[#0C4A6E] mb-1">Book Doorstep Visit</Text>
          <Text className="text-xs text-gray-500 mb-5">Select details and schedule a detailing expert to your home</Text>

          <View className="space-y-4">
            <View>
              <Text className="text-xs font-semibold text-gray-600 mb-1.5">Full Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="e.g. Sameer Faridi"
                placeholderTextColor="#A1A1AA"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0C4A6E]"
              />
            </View>

            <View>
              <Text className="text-xs font-semibold text-gray-600 mb-1.5">Phone Number</Text>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="e.g. +91 98765 43210"
                placeholderTextColor="#A1A1AA"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0C4A6E]"
              />
            </View>

            <View>
              <Text className="text-xs font-semibold text-gray-600 mb-1.5">Car Model</Text>
              <TextInput
                value={carModel}
                onChangeText={setCarModel}
                placeholder="e.g. Hyundai Creta (White)"
                placeholderTextColor="#A1A1AA"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0C4A6E]"
              />
            </View>

            <View>
              <Text className="text-xs font-semibold text-gray-600 mb-1.5">Dehradun Location</Text>
              <View className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="p-2 flex-row">
                  {AREAS.map((area) => (
                    <TouchableOpacity
                      key={area}
                      onPress={() => setSelectedArea(area)}
                      className={`px-3 py-1.5 rounded-lg mr-2 ${
                        selectedArea === area ? 'bg-[#0EA5E9]' : 'bg-white border border-gray-100'
                      }`}
                    >
                      <Text className={`text-xs font-semibold ${
                        selectedArea === area ? 'text-white' : 'text-gray-600'
                      }`}>{area}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleBooking}
              className="bg-[#F97316] py-3.5 rounded-xl items-center shadow-lg shadow-orange-100 mt-4 active:bg-[#EA580C]"
            >
              <Text className="text-white font-bold text-base tracking-wide">Schedule Wash Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SOCIAL PROOF (TESTIMONIALS) */}
        <View className="px-6 mt-8">
          <Text className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-1">Reviews</Text>
          <Text className="text-xl font-extrabold text-[#0C4A6E] mb-4">Dehradun Car Owners Speak</Text>

          {REVIEWS.map((rev) => (
            <View key={rev.id} className="bg-white border border-sky-100 rounded-2xl p-5 mb-4 shadow-sm">
              <View className="flex-row justify-between items-center mb-3">
                <View className="flex-row items-center">
                  <Image source={{ uri: rev.avatar }} className="w-10 h-10 rounded-full" />
                  <View className="ml-3">
                    <Text className="text-sm font-bold text-[#0C4A6E]">{rev.name}</Text>
                    <View className="flex-row items-center">
                      <MapPin size={10} color="#6B7280" />
                      <Text className="text-[10px] text-gray-500 ml-1">{rev.location}</Text>
                    </View>
                  </View>
                </View>
                <View className="flex-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} color="#F97316" fill="#F97316" className="mr-0.5" />
                  ))}
                </View>
              </View>
              <Text className="text-xs text-gray-600 leading-relaxed italic">
                "{rev.comment}"
              </Text>
            </View>
          ))}
        </View>

        {/* CALL TO ACTION HELPLINE */}
        <View className="mx-6 mt-6 bg-[#0C4A6E] rounded-2xl p-6 items-center shadow-md relative overflow-hidden">
          <View className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full" />
          <View className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full" />

          <Phone size={28} color="#38BDF8" className="mb-2" />
          <Text className="text-white font-bold text-lg mb-1">Need Help Booking?</Text>
          <Text className="text-sky-200 text-xs text-center mb-4 leading-relaxed">
            Talk to our Dehradun car spa manager for special corporate packages or queries.
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Helpline', 'Calling customer support at +91 99977 88888')}
            className="bg-white/10 border border-white/20 px-6 py-2.5 rounded-xl"
          >
            <Text className="text-white font-semibold text-xs">+91 99977 88888</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* SUCCESS MODAL */}
      <Modal visible={bookingSuccess} transparent animationType="fade">
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white rounded-3xl p-6 w-full max-w-sm items-center shadow-2xl">
            <View className="w-16 h-16 rounded-full bg-green-50 justify-center items-center mb-4">
              <Sparkles size={32} color="#22C55E" />
            </View>
            
            <Text className="text-xl font-bold text-[#0C4A6E] text-center mb-2">Booking Scheduled!</Text>
            <Text className="text-xs text-gray-500 text-center mb-6 leading-relaxed">
              Hey {name}, your slot for <Text className="font-semibold text-[#0EA5E9]">{selectedPackage === 'eco' ? 'Eco Wash' : selectedPackage === 'himalayan' ? 'Himalayan Shine' : 'Mussoorie Special'}</Text> has been registered at <Text className="font-semibold">{selectedArea}</Text> for your <Text className="font-semibold">{carModel}</Text>.
              {'\n\n'}Our coordinator will call you shortly to confirm timings.
            </Text>

            <TouchableOpacity
              onPress={resetForm}
              className="bg-[#0EA5E9] py-3 w-full rounded-xl items-center active:bg-[#0284C7]"
            >
              <Text className="text-white font-bold text-sm">Awesome, thanks!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
